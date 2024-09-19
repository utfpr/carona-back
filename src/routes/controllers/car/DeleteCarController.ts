import { Request, Response } from "express"
import { ICarRepository } from "../../../interfaces/ICarRepository"
import { DeleteCarService } from "../../../services/car/DeleteCarService"
import { ICar } from "../../../interfaces/ICarInterface"
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class DeleteCarController{
    constructor(private carRepo: ICarRepository, private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

        const deleteCarService = new DeleteCarService(this.carRepo, this.userRepo)
        await deleteCarService.execute({ id: Id })

        return res.status(200).send()
    }
}