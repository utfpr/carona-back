import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { ListCarService } from "../../../services/car/ListCarService";

export class ListCarsController{
    constructor(private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { userId } = req.params;
        
        const listCarsService = new ListCarService(this.carRepo)
        
        const Id = parseInt(req.params.id, 10);

        const cars = await listCarsService.execute(Id)

        return res.json(cars)
    }
}