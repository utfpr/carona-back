import { Request, Response } from "express";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { IRace } from "../../../interfaces/IRaceInterface";
import { UpdateRaceService } from "../../../services/race/UpdateRaceService";

export class UpdateRaceController{
    constructor(private raceRepo: IRaceRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const { originPoint, endPoint, timeStart, userId, carId, seats}: IRace = req.body;

        const updateRaceService = new UpdateRaceService(this.raceRepo)
        
        await updateRaceService.execute({
            id,
            originPoint,
            endPoint,
            timeStart,
            userId,
            carId,
            seats
        })

        return res.status(201).json()
    }
}