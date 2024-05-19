import { PrismaClient } from "@prisma/client";
import { IRaceRepository } from "../interfaces/IRaceRepository";
import { IRace, IRaceUpdateRequest } from "../interfaces/IRaceInterface";
import { race } from "../entities/race";
import { futureRace, listFutureRaces, ordenate } from "../utils/futureRace";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class RaceRepository implements IRaceRepository{
    
    async historic(id: string): Promise<IRace[]> {
        let result = await prisma.race.findMany({
            where: {userId: id} 
        })

        const res = await prisma.passengers.findMany({
            where: { userId: id}
        })

        let i = 0;

        while(i < res.length){
            let race = await prisma.race.findUnique({
                where: {id: res[i].raceId}
            })

            if(race) result.push(race)

            i++;
            }

            result = ordenate(result)

             return result
        }

    async findAll(): Promise<IRace[]> {
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

    async findOneRace(id: string): Promise<IRace> {
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

    async insert(props: IRace): Promise<IRace> {
        const result = await prisma.race.create({
            data: props
        })

        return result
    }

    async update(props: IRaceUpdateRequest, id: string): Promise<IRace> {
        console.log(props.seats)
        const vaga = props.seats;
        const result = await prisma.race.update({
            where: { id },
            data: { seats: vaga, originPoint: props.originPoint, endPoint: props.endPoint, timeStart: props.timeStart}
        })

        return result
    }
    async delete(id: string): Promise<void> {
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