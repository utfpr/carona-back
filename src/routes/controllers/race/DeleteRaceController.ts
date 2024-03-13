import { Request, Response } from "express";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { DeleteRaceService } from "../../../services/race/DeleteRaceService";

export class DeleteRaceController{
    constructor(private raceRepo: IRaceRepository) {}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteRaceService = new DeleteRaceService(this.raceRepo)
        await deleteRaceService.execute({ id })

        return res.status(200).send()
    }
}