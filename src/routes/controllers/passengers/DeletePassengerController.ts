import { Request, Response } from "express";
import { IPassengerRepository } from "../../../interfaces/IPassengerRepository";
import { DeletePassengerService } from "../../../services/passenger/DeletePassengerService";

export class DeletePassengerController{
    constructor(private passengerRepo: IPassengerRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deletePassengerService = new DeletePassengerService(this.passengerRepo)
        await deletePassengerService.execute({ id })

        return res.status(200).send()
    }
}