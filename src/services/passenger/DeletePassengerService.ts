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

        await this.raceRepo.update(race, race.id)

        const notification = new PassengerExitNotificationService(this.passengerRepo, this.userRepo, this.raceRepo);
        
        await notification.execute(result.id)

        await this.passengerRepo.delete(id)
    }
}