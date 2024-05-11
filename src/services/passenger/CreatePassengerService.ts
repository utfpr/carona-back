import { Passenger } from "../../entities/passengers";
import { AppError } from "../../errors/AppError";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../../interfaces/IPassengersInterface";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { PassengerEntryNotificationService } from "../notification/PassengerEntryNotificationService";

export class CreatePassengerService{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository, private userRepo: IUserRepository){}
    async execute({userId, raceId}: IPassengerCreateRequest): Promise<IPassenger>{
        
        const passenger = new Passenger({ userId, raceId})
        
        let race = await this.raceRepo.findOneRace(raceId)

        
        if(race.seats <= 0){
            throw new AppError("Não há vagas")
        }
        const result = await this.passengerRepo.insert(passenger.toJson())
        
        race.seats--;
        
        await this.raceRepo.update(race, race.id)

        const notification = new PassengerEntryNotificationService(this.userRepo, this.passengerRepo, this.raceRepo);
        
        await notification.execute(passenger.id, passenger.userId)
    
        return result

    }
}