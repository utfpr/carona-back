import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRace, IRaceGetRequest } from "../../interfaces/IRaceInterface";

export class GetRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({id}: IRaceGetRequest): Promise<IRace>{
        const result = await this.raceRepo.findOneRace(id)
        return result
    }
}