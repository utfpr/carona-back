import { PrismaClient } from "@prisma/client";
import { ICarRepository } from "../interfaces/ICarRepository";
import { ICar } from "../interfaces/ICarInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class CarRepository implements ICarRepository{
    async findOneCar(id: string): Promise<ICar> {
        const result = await prisma.car.findUnique({
            where: {id}
        });

        if(!result) throw new AppError("car not found");
        
        return result
    }
    async findAll(userId: string): Promise<ICar[]> {
        const result = await prisma.car.findMany({
            where: {userId: userId}
        })
        return result;
    }

    async insert(props: ICar): Promise<ICar> {
        const result = await prisma.car.create({
            data:props
        })

        return result;
    }

    async update(props: ICar, id: string): Promise<ICar> {
        const result = await prisma.car.update({
            where: { id },
            data: props
        })

        return result;
    }

    async delete(id: string): Promise<void> {
        await prisma.car.delete({
            where: { id }
        })
    }
    
}