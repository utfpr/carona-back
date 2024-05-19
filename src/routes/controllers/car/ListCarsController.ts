import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { ListCarService } from "../../../services/car/ListCarService";

export class ListCarsController{
    constructor(private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        

        const listCarsService = new ListCarService(this.carRepo)
        const cars = await listCarsService.execute()

        return res.json(cars)
    }
}