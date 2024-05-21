import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { Request, Response } from "express"
import { ListActiveRaceService } from "../../../services/race/ListActiveRaces";

export class ListActiveRacesController{
    constructor(private raceRepo: IRaceRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getRaceService = new ListActiveRaceService(this.raceRepo)
        const result = await getRaceService.execute({ id })

        return res.json(result)
    }
}