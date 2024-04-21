import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRace, IRaceDeleteRequest } from "../../interfaces/IRaceInterface";

export class DeleteRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({id}: IRaceDeleteRequest):Promise<void>{
        console.log("4")
        await this.raceRepo.findOneRace(id)
        console.log("5")
        await this.raceRepo.delete(id)
    }
}