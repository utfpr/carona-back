import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { Request, Response } from "express"
import { HistoricRaceService } from "../../../services/race/HistoricRaceService";

export class HistoricRaceController{
    constructor(private raceRepo: IRaceRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getRaceService = new HistoricRaceService(this.raceRepo)
        const result = await getRaceService.execute({ id })

        return res.json(result)
    }
}