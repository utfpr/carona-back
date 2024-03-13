import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar, ICarDeleteRequest } from "../../interfaces/ICarInterface";

export class DeleteCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({id}: ICarDeleteRequest): Promise<void>{
        await this.carRepo.findOneCar(id)
        await this.carRepo.delete(id)
    }
}