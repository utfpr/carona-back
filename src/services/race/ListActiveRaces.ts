import { IListActiveRacesRequest, IRace } from "../../interfaces/IRaceInterface"
import { IRaceRepository } from "../../interfaces/IRaceRepository"

export class ListActiveRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({id}: IListActiveRacesRequest): Promise<IRace[]>{
        const result = await this.raceRepo.listActiveRaces(id)
        return result
    }
}