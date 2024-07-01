import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar, ICarGetRequest } from "../../interfaces/ICarInterface";

export class ListCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({id}: ICarGetRequest): Promise<ICar[]>{
        const cars = await this.carRepo.findAll(id)
        return cars;
    }
}