import { Request, Response } from "express";
import { IPassengerRepository } from "../../../interfaces/IPassengerRepository";
import { CreatePassengerService } from "../../../services/passenger/CreatePassengerService";

export class CreatePassengerController{
    constructor(private passengerRepo: IPassengerRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId, raceId } = req.params;
        console.log(userId, "batata", raceId)
        const createPassengerService = new CreatePassengerService(this.passengerRepo)
        console.log("1")
        await createPassengerService.execute({ userId, raceId})

        return res.status(201).send()
    }
}