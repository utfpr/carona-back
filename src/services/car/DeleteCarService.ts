import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICar, ICarDeleteRequest } from "../../interfaces/ICarInterface";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser } from "../../interfaces/IUserInterface";

export class DeleteCarService{
    constructor(private carRepo: ICarRepository, private userRepo: IUserRepository){}
    async execute({id}: ICarDeleteRequest): Promise<IUser>{
        const car =  await this.carRepo.findOneCar(id)
        await this.carRepo.delete(id)

        const cars = await this.carRepo.findUserCars(car.userId)

        let user = await this.userRepo.findOneUser(car.userId)

        if(cars.length === 0){
            user.haveCar = false;
            user = await this.userRepo.update(user, car.userId)
        }

        return user




    }
}