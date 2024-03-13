import { Car } from "../../entities/car";
import { AppError } from "../../errors/AppError";
import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICarCreateRequest } from "../../interfaces/ICarInterface";

export class CreateCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({plate, description, userId}:ICarCreateRequest):Promise<void>{
        console.log("4")
        const car = new Car({plate, description, userId});
        console.log("5")
        await this.carRepo.insert(car.toJSON())
    }
}