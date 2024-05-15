import { PrismaClient } from "@prisma/client";
import { IPassengerRepository } from "../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../interfaces/IPassengersInterface";
import { AppError } from "../errors/AppError";
import { IRace } from "../interfaces/IRaceInterface";

const prisma = new PrismaClient();
export class PassengerRepository implements IPassengerRepository{
    async listUserRaces(userId: string): Promise<IPassenger[]> {
        const result = await prisma.passengers.findMany({
            where: {userId}
        })

        return result
    }

    async listRacePassengers(raceId: string): Promise<IPassenger[]> {
        const result = await prisma.passengers.findMany({
            where: {raceId}
        })

        return result
    }
    
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
        console.log(result)
            if(!result){
                throw new AppError("Passenger not found")
            }

        return result
    }
    
}