import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IPassengerDeleteRequest } from "../../interfaces/IPassengersInterface";
import { IRace } from "../../interfaces/IRaceInterface";
import { IRaceRepository } from "../../interfaces/IRaceRepository";

export class DeletePassengerService{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository){}

    async execute({id}: IPassengerDeleteRequest): Promise<void>{

        const result = await this.passengerRepo.get(id)
        let race = await this.raceRepo.findOneRace(result.raceId)

        race.seats++;

        await this.raceRepo.update(race, result.id)

        await this.passengerRepo.delete(id)
    }
}