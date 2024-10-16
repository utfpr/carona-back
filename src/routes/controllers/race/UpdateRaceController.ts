import { Request, Response } from "express";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { IRace } from "../../../interfaces/IRaceInterface";
import { UpdateRaceService } from "../../../services/race/UpdateRaceService";

export class UpdateRaceController{
    constructor(private raceRepo: IRaceRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);
        
        const { originPoint, endPoint, timeStart, seats}: IRace = req.body;
        console.log("controller 1")
        const updateRaceService = new UpdateRaceService(this.raceRepo)
        console.log("controller")
        const result = await updateRaceService.execute({
            id: Id,
            originPoint,
            endPoint,
            timeStart,
            seats
        })

        return res.status(201).json(result)
    }
}