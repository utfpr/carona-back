import { Request, Response } from "express";
import { ICarRepository } from "../../../interfaces/ICarRepository";
import { ICar } from "../../../interfaces/ICarInterface";
import { UpdateCarService } from "../../../services/car/UpdateCarService";
import { constructFrom } from "date-fns";

export class UpdateCarController{
    constructor(private carRepo: ICarRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const Id = parseInt(req.params.id, 10);
        const {plate, description, userId, mainCar }: ICar = req.body;

        const updateCarService = new UpdateCarService(this.carRepo)
        await updateCarService.execute({
            id: Id,
            plate,
            description,
            userId,
            mainCar
        })

        return res.status(201).json()
    }
}