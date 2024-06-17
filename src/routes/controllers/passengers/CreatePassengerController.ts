import { Request, Response } from "express";
import { IPassengerRepository } from "../../../interfaces/IPassengerRepository";
import { CreatePassengerService } from "../../../services/passenger/CreatePassengerService";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class CreatePassengerController{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository, private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId, raceId } = req.params;

        const UserId = parseInt(req.params.userId, 10);

        const RaceId = parseInt(req.params.raceId, 10);

        console.log(userId, "batata", raceId)
        const createPassengerService = new CreatePassengerService(this.passengerRepo, this.raceRepo, this.userRepo)
        console.log("1")
        await createPassengerService.execute({ userId: UserId, raceId: RaceId})

        return res.status(201).send()
    }
}