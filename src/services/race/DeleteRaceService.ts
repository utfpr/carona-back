import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRace, IRaceDeleteRequest } from "../../interfaces/IRaceInterface";

export class DeleteRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({id}: IRaceDeleteRequest):Promise<void>{
        await this.raceRepo.findOneRace(id)
        await this.raceRepo.delete(id)
    }
}