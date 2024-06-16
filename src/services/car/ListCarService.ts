import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar } from "../../interfaces/ICarInterface";

export class ListCarService{
    constructor(private carRepo: ICarRepository){}
    async execute(userId: string): Promise<ICar[]>{

        const Id = parseInt(userId, 10);

        const cars = await this.carRepo.findAll(Id)
        return cars;
    }
}