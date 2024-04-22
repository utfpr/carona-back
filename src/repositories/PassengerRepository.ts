import { PrismaClient } from "@prisma/client";
import { IPassengerRepository } from "../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../interfaces/IPassengersInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();
export class PassengerRepository implements IPassengerRepository{
    
    async insert(props: IPassenger): Promise<IPassenger> {
        console.log("3")
        const result = await prisma.passengers.create({
            data: { userId: props.userId, raceId: props.raceId, id: props.id} 
        })
        console.log("4")
        console.log(result)
        return result
    }

    async delete(id: string): Promise<void> {
        await prisma.passengers.delete({
            where: { id }
        })
    }

    async get(id:string): Promise<IPassenger>{
        const result = await prisma.passengers.findUnique({
            where: { id }
        })

            if(!result){
                throw new AppError("Passenger not found")
            }

        return result
    }
    
}