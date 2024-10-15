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

        const named = await this.userRepo.findOneUser(userId)
        
        const passenger = new Passenger({ userId, raceId, active: true, name: named.name })
        
        let race = await this.raceRepo.findOneRace(raceId)

        
        if(race.seats <= 0){
            throw new AppError("No seats")
        }

        const user = await this.userRepo.findOneUser(userId)

        const userPassengers = await this.passengerRepo.listUserRaces(userId)

        if(userPassengers.length !== 0){
            let i = 0;
            while(i<userPassengers.length){
                const travel = await this.raceRepo.findOneRace(userPassengers[i].raceId)
                if(travel.timeStart === race.timeStart){
                    throw new AppError('You have a race in this time')
                } else {
                    i++
                }
            }
        }

        const result = await this.passengerRepo.insert(passenger.toJson())
        
        race.seats--;
        
        await this.raceRepo.update(race, race.id)

        const notification = new PassengerEntryNotificationService(this.userRepo, this.passengerRepo, this.raceRepo);
        
        await notification.execute(result.id, passenger.userId)
    
        return result

    }
}