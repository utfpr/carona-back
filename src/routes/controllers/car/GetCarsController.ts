import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { GetCarService } from "../../../services/car/GetCarService";

export class GetCarsController{
    constructor(private carRepo: ICarRepository){}
    async handle(req:Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const getCarsService = new GetCarService(this.carRepo)
        const result = await getCarsService.execute({ id })

        return res.json(result)
    }
}