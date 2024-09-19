import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { ICar } from "../../../interfaces/ICarInterface";
import { UpdateCarService } from "../../../services/car/UpdateCarService";

export class UpdateCarController{
    constructor(private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const {plate, description, userId, mainCar }: ICar = req.body;

        const Id = parseInt(req.params.id, 10);

        const updateCarService = new UpdateCarService(this.carRepo)
        await updateCarService.execute({
            id: Id,
            plate,
            description,
            mainCar
        })

        return res.status(201).json()
    }
}