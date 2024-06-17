import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar } from "../../interfaces/ICarInterface";

export class ListCarService{
    constructor(private carRepo: ICarRepository){}
    async execute(userId: number): Promise<ICar[]>{
        const cars = await this.carRepo.findAll(userId)
        return cars;
    }
}