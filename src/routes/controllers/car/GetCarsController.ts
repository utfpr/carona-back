import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { GetCarService } from "../../../services/car/GetCarService";

export class GetCarsController{
    constructor(private carRepo: ICarRepository){}
    async handle(req:Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

        const getCarsService = new GetCarService(this.carRepo)
        const result = await getCarsService.execute({ id: Id })

        return res.json(result)
    }
}