import { Request, Response } from "express";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { DeleteRaceService } from "../../../services/race/DeleteRaceService";

export class DeleteRaceController{
    constructor(private raceRepo: IRaceRepository) {}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        console.log("1")
        const deleteRaceService = new DeleteRaceService(this.raceRepo)
        console.log("2")
        await deleteRaceService.execute({ id })
        console.log("3")
        return res.status(200).send()
    }
}