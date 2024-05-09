import { Car } from "../../entities/car";
import { AppError } from "../../errors/AppError";
import { ICarRepository } from "../../interfaces/ICarRepository";
import { ICarCreateRequest } from "../../interfaces/ICarInterface";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { user } from "@prisma/client";
import { IUser } from "../../interfaces/IUserInterface";

export class CreateCarService{
    constructor(private carRepo: ICarRepository, private userRepo: IUserRepository){}
    async execute({plate, description, userId}:ICarCreateRequest):Promise<IUser>{
        
        const car = new Car({plate, description, userId});
        
        await this.carRepo.insert(car.toJSON())

        let user = await this.userRepo.findOneUser(userId)
        console.log('cc1')
        if(user.haveCar === false){
            console.log("cc2")
            user.haveCar = true;
            await this.userRepo.update(user, userId)
        } 

        return user
    }
}