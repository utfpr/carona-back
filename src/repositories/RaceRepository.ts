import { PrismaClient } from "@prisma/client";
import { IRaceRepository } from "../interfaces/IRaceRepository";
import { IRace, IRaceReturn } from "../interfaces/IRaceInterface";
import { listFutureRaces, ordenate } from "../utils/futureRace";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class RaceRepository implements IRaceRepository{
    async listActiveRaces(userId: number): Promise<IRaceReturn[]> {
        let result = await prisma.race.findMany({
            where: {userId: userId, active: true},
            include: {
                passengers: true
            }
        })


        const res = await prisma.passengers.findMany({
            where: { userId: userId, active: true}
        })

        let i = 0;

        while(i < res.length){
            let race = await prisma.race.findUnique({
                where: {id: res[i].raceId, active: true},
                include: {
                    passengers: true
                }
            })


            if(race) result.push(race)

            i++;
            }

            result = ordenate(result)
           
             return result
    }
    
    async historic(id: number): Promise<IRaceReturn[]> {
        let result = await prisma.race.findMany({
            where: {userId: id, active: true, timeStart: {lte: new Date()}},
            include: {
                passengers: true
            }
        })

        const res = await prisma.passengers.findMany({
            where: { userId: id}
        })

        let i = 0;

        while(i < res.length){
            let race = await prisma.race.findUnique({
                where: {id: res[i].raceId, active: true, timeStart: {lte: new Date()}},
                include: {
                    passengers: true
                }
            })

            if(race) result.push(race)

            i++;
            }

             return result
        }

    async findAll(): Promise<IRaceReturn[]> {
        const result = await prisma.race.findMany({
            where: { active: true}, 
            include: {
                driver: true,
                passengers: true
            }
        });

        const res = listFutureRaces(result)

        return res;
    }

    async findOneRace(id: number): Promise<IRaceReturn> {
        const result = await prisma.race.findUnique({
            where: { id },
            include: {
                driver: true,
                passengers: true
            }
        })

        if(!result) throw Error('Race not found')
        return result;
    }

    async insert(props: IRace): Promise<IRaceReturn> {

        const driver = await prisma.user.findUnique({
            where: {id: props.userId}
        })

        if(!driver) throw new AppError("User not found")

        const result = await prisma.race.create({
            data: {originPoint: props.originPoint, endPoint: props.endPoint, timeStart: props.timeStart, userId: props.userId, carId: props.carId, seats: props.seats, active: props.active, drivername: driver.name}, 
        })

        return result
    }

    async update(props: IRace, id: number): Promise<IRaceReturn> {
        const vaga = props.seats;
        const result = await prisma.race.update({
            where: { id },
            data: { seats: vaga, originPoint: props.originPoint, endPoint: props.endPoint, timeStart: props.timeStart}
        })

        return result
    }
    async delete(id: number): Promise<void> {
       const result = await prisma.race.findUnique({
        where: { id }
       })

       if(!result || result.active === false) throw new AppError('Race not found')

       await prisma.passengers.updateMany({
        where: {raceId: id},
        data: {active: false}
       })

       await prisma.race.update({
        where: { id },
        data: { active: false}
       })
    }
    
}