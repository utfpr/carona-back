import { Request, Response } from "express"
import { IRaceRepository } from "../../../interfaces/IRaceRepository"
import { GetRaceService } from "../../../services/race/GetRaceService"

export class GetRaceController{
    constructor(private raceRepo: IRaceRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

        const getRaceService = new GetRaceService(this.raceRepo)
        const result = await getRaceService.execute({ id: Id })

        return res.json(result)
    }
}