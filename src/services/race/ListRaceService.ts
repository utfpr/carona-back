import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRace } from "../../interfaces/IRaceInterface";

export class ListRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute(): Promise<IRace[]>{
        const races = await this.raceRepo.findAll()
        return races;
    }
}