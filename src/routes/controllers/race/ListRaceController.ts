import { Request, Response } from "express"
import { IRaceRepository } from "../../../interfaces/IRaceRepository"
import { ListRaceService } from "../../../services/race/ListRaceService"

export class ListRacesController{
    constructor(private raceRepo: IRaceRepository) {}
    async handle(_: Request, res: Response): Promise<Response>{
        const listRacesService = new ListRaceService(this.raceRepo)
        const races = await listRacesService.execute()

        return res.json(races)
    }
}