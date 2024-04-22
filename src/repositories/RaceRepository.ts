import { PrismaClient } from "@prisma/client";
import { IRaceRepository } from "../interfaces/IRaceRepository";
import { IRace, IRaceUpdateRequest } from "../interfaces/IRaceInterface";
import { race } from "../entities/race";

const prisma = new PrismaClient();

export class RaceRepository implements IRaceRepository{
    async  findAll(): Promise<IRace[]> {
        const result = await prisma.race.findMany({
            include: {
                driver: true,
                passengers: true
            }
        });
        return result;
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
        console.log("repo")
       await prisma.race.delete({
        where: { id }
       })
    }
    
}