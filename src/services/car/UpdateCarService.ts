import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar } from "../../interfaces/ICarInterface";
import { ICarUpdateRequest } from "../../interfaces/ICarInterface";
import { AppError } from "../../errors/AppError";
import { Car } from "../../entities/car";

export class UpdateCarService{
    constructor(private carRepo: ICarRepository){}
    async execute({id, plate, description, userId, mainCar}: ICarUpdateRequest): Promise<void>{
        const result = await this.carRepo.findOneCar(id)

        if(!result) throw new AppError("Car not found");

        if(mainCar === true){
           let actual = await this.carRepo.findMainCar(result.userId)
           actual.mainCar = false
           if(!actual.id) throw new AppError('user does not exist')
           await this.carRepo.update(actual, actual.id)
        }

        const cars = new Car({
            plate: plate || result.plate,
            description: description || result.description,
            userId: result.userId,
            mainCar: mainCar || result.mainCar,
            active: true
        }, result.id);

        await this.carRepo.update(cars.toJSON(), id)
    }
}