import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassengerDeleteRequest } from "../../interfaces/IPassengersInterface";
import { IRace } from "../../interfaces/IRaceInterface";

export class DeletePassengerService{
    constructor(private passengerRepo: IPassengerRepository){}

    async execute({id}: IPassengerDeleteRequest): Promise<void>{
        await this.passengerRepo.delete(id)
    }
}