import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar } from "../../interfaces/ICarInterface";
import { ICarUpdateRequest } from "../../interfaces/ICarInterface";
import { AppError } from "../../errors/AppError";
import { Car } from "../../entities/car";

export class UpdateCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({id, plate, description, userId}: ICarUpdateRequest): Promise<void>{
        const result = await this.carRepo.findOneCar(id)

        if(!result) throw new AppError("Car not found");

        const cars = new Car({
            plate: plate || result.plate,
            description: description || result.description,
            userId: result.userId
        }, result.id);

        await this.carRepo.update(cars.toJSON(), id)
    }
}