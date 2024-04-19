import { Passenger } from "../../entities/passengers";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../../interfaces/IPassengersInterface";

export class CreatePassengerService{
    constructor(private passengerRepo: IPassengerRepository){}
    async execute({userId, raceId}: IPassengerCreateRequest): Promise<IPassenger>{
        const passenger = new Passenger({ userId, raceId})
        console.log("2")
        const result = await this.passengerRepo.insert(passenger.toJson())

        return result

    }
}