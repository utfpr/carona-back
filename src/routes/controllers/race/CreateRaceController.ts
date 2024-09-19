import { Request, Response } from "express";
import { CreateRaceService } from "../../../services/race/CreateRaceService";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { IChatRepository } from "../../../interfaces/IChatRepository";

export class CreateRaceController{
    constructor(
        private raceRepo: IRaceRepository, private chatRepo: IChatRepository
    ){}
    async handle(req: Request, res: Response): Promise<Response>{
        const{ originPoint, endPoint, timeStart, userId, carId, seats} = req.body;

        const createRaceService = new CreateRaceService(
            this.raceRepo, this.chatRepo
        )

        const race = await createRaceService.execute({
            originPoint,
            endPoint,
            timeStart,
            userId,
            carId,
            seats
        });

        return res.status(201).json(race)
    }
}