import { Passenger } from "../../entities/passengers";
import { AppError } from "../../errors/AppError";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../../interfaces/IPassengersInterface";
import { IRaceRepository } from "../../interfaces/IRaceRepository";

export class CreatePassengerService{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository){}
    async execute({userId, raceId}: IPassengerCreateRequest): Promise<IPassenger>{
        const passenger = new Passenger({ userId, raceId})
        console.log("createPassengerService1")

        let race = await this.raceRepo.findOneRace(raceId)

        console.log("createPassengerService2", race.seats)
        if(race.seats <= 0){
            throw new AppError("Não há vagas")
        }
        const result = await this.passengerRepo.insert(passenger.toJson())
        console.log("createPassengerService3")
        race.seats--;
        console.log("creat4ePassengerService")
        await this.raceRepo.update(race, race.id)
        console.log("atualizou")
        return result

    }
}