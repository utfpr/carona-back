import { IHistoricRequest, IRace } from "../../interfaces/IRaceInterface"
import { IRaceRepository } from "../../interfaces/IRaceRepository"

export class HistoricRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({id}: IHistoricRequest): Promise<IRace[]>{
        const result =await this.raceRepo.historic(id)
        return result
    }
}