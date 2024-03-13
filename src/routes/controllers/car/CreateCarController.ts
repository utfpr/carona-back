import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { CreateCarService } from "../../../services/car/CreateCarService";

export class CreateCarController{
    constructor( private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const{plate, description, userId} = req.body;
        console.log("1")
        const createCarService = new CreateCarService(this.carRepo);
        console.log("2")
        const car = await createCarService.execute({plate, description, userId});
        console.log("3")
        return res.status(201).json(car);
    }
}