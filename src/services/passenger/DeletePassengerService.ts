import { AppError } from "../../errors/AppError";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassengerDeleteRequest } from "../../interfaces/IPassengersInterface";
import { IRace } from "../../interfaces/IRaceInterface";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { PassengerExitNotificationService } from "../notification/PassengerExitNotificationService";

export class DeletePassengerService{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository, private userRepo: IUserRepository){}

    async execute({id}: IPassengerDeleteRequest): Promise<void>{

        const result = await this.passengerRepo.get(id)
        let race = await this.raceRepo.findOneRace(result.raceId)

        race.seats++;
        if(!race.id) throw new AppError('user does not exist')
        await this.raceRepo.update(race, race.id)

        const notification = new PassengerExitNotificationService(this.passengerRepo, this.userRepo, this.raceRepo);
        if(!result.id) throw new AppError('something not found')
        await notification.execute(result.id)

        await this.passengerRepo.delete(id)
    }
}