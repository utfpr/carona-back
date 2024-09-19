import { Car } from "../../entities/car";
import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICarCreateRequest } from "../../interfaces/ICarInterface";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { user } from "@prisma/client";
import { IUser } from "../../interfaces/IUserInterface";

export class CreateCarService{
    constructor(private carRepo: ICarRepository, private userRepo: IUserRepository){}
    async execute({plate, description, userId}:ICarCreateRequest):Promise<IUser>{
        
        const car = new Car({plate, description, userId, mainCar: false, active: true});

        let user = await this.userRepo.findOneUser(userId)
        console.log('cc1')
        if(user.haveCar === false){
            console.log('primeiro carro')
            user.haveCar = true;
            car.mainCar = true;
            await this.carRepo.insert(car.toJSON())
            user = await this.userRepo.update(user, userId)
        } else{

        await this.carRepo.insert(car.toJSON())

        }

        const res = await this.userRepo.findOneUser(user.id)

        return res
    }
}