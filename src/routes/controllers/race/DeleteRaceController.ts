import { Request, Response } from "express";
import { IRaceRepository } from "../../../interfaces/IRaceRepository";
import { DeleteRaceService } from "../../../services/race/DeleteRaceService";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { IPassengerRepository } from "../../../interfaces/IPassengerRepository";

export class DeleteRaceController{
    constructor(private raceRepo: IRaceRepository,
        private userRepo: IUserRepository,
        private passengerRepo: IPassengerRepository) {}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);
       
        const deleteRaceService = new DeleteRaceService(this.raceRepo, this.userRepo, this.passengerRepo)
        
        await deleteRaceService.execute({ id: Id })
       
        return res.status(200).send()
    }
}