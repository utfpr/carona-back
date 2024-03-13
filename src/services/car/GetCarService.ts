import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar, ICarGetRequest } from "../../interfaces/ICarInterface";

export class GetCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({id}: ICarGetRequest): Promise<ICar>{
        const result = await this.carRepo.findOneCar(id)

        return result
    }
}