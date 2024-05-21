import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { ListCarService } from "../../../services/car/ListCarService";

export class ListCarsController{
    constructor(private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params;
        console.log('1')
        const listCarsService = new ListCarService(this.carRepo)
        console.log('2')
        const cars = await listCarsService.execute(userId)

        return res.json(cars)
    }
}