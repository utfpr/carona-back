import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { CreateCarService } from "../../../services/car/CreateCarService";
import { IUserRepository } from "../../../interfaces/IUserRepository";

export class CreateCarController{
    constructor( private carRepo: ICarRepository, private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const{plate, description, userId} = req.body;
        
        const createCarService = new CreateCarService(this.carRepo, this.userRepo);
        
        const car = await createCarService.execute({plate, description, userId});
        
        return res.status(201).json(car);
    }
}