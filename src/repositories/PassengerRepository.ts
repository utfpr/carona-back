import { PrismaClient } from "@prisma/client";
import { IPassengerRepository } from "../interfaces/IPassengerRepository";
import { IPassenger, IPassengerCreateRequest } from "../interfaces/IPassengersInterface";
import { AppError } from "../errors/AppError";
import { IRace } from "../interfaces/IRaceInterface";

const prisma = new PrismaClient();
export class PassengerRepository implements IPassengerRepository{
    async listUserRaces(userId: string): Promise<IPassenger[]> {
        const result = await prisma.passengers.findMany({
            where: {userId, active: true}
        })

        return result
    }

    async listRacePassengers(raceId: string): Promise<IPassenger[]> {
        const result = await prisma.passengers.findMany({
            where: {raceId, active: true}
        })

        return result
    }
    
    async insert(props: IPassenger): Promise<IPassenger> {

        const user = await prisma.user.findUnique({
            where: { id: props.userId}
        })

        if(!user) throw new AppError('user not found')

        const name = user.name;
        const result = await prisma.passengers.create({
            data: { name: name, userId: props.userId, raceId: props.raceId, id: props.id, active: true} 
        })
       
        return result
    }

    async delete(id: string): Promise<void> {
        const result = await prisma.passengers.findUnique({
            where: { id }
        })

        if(!result) throw new AppError('Passenger not found')

        await prisma.passengers.delete({
            where: { id }
        })
    }

    async get(id:string): Promise<IPassenger>{
        const result = await prisma.passengers.findUnique({
            where: { id, active: true }
        })
        console.log(result)
            if(!result){
                throw new AppError("Passenger not found")
            }

        return result
    }
    
}