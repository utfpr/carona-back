import { Request, Response } from "express";
import { IPassengerRepository } from "../../../interfaces/IPassengerRepository";
import { DeletePassengerService } from "../../../services/passenger/DeletePassengerService";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class DeletePassengerController{
    constructor(private passengerRepo: IPassengerRepository, private raceRepo: IRaceRepository, private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deletePassengerService = new DeletePassengerService(this.passengerRepo, this.raceRepo, this.userRepo)
        await deletePassengerService.execute({ id })

        return res.status(200).send()
    }
}