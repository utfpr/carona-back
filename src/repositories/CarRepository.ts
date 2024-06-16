import { PrismaClient } from "@prisma/client";
import { ICarRepository } from "../interfaces/ICarRepository";
import { ICar } from "../interfaces/ICarInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class CarRepository implements ICarRepository{
    async findMainCar(userId: number): Promise<ICar> {
        const car = await prisma.car.findFirst({
            where: { userId, mainCar:true }
        })

        if(!car) throw new AppError('Car not found')

        return car
    }

    async findUserCars(userId: number): Promise<ICar[]> {
        const result = await prisma.car.findMany({
            where: {userId, active: true}
        })

        return result
    }

    async findOneCar(id: number): Promise<ICar> {
        const result = await prisma.car.findUnique({
            where: {id}
        });

        if(!result || result.active === false) throw new AppError("car not found");
        
        return result
    }

    async findAll(userId: number): Promise<ICar[]> {
        const result = await prisma.car.findMany({
            where: {userId: userId, active: true}
        })
        return result;
    }

    async insert(props: ICar): Promise<ICar> {
        const result = await prisma.car.create({
            data:props
        })

        return result;
    }

    async update(props: ICar, id: number): Promise<ICar> {
        const result = await prisma.car.update({
            where: { id },
            data: props
        })

        return result;
    }

    async delete(id: number): Promise<void> {
        const result = await prisma.car.findUnique({
            where: { id }
        })

        if(!result) throw new AppError('car not found')

        const races = await prisma.race.findMany({
            where: {carId: id, active: true, timeStart: {lte: new Date()}}
        })

        if(races.length > 0) throw new AppError('That car cant be deleted as its linked to a race. Delete the races that contain this car so that you can delete it')

        const user = await prisma.user.findUnique({
            where: { id: result?.userId}
        })

        const userCars = await prisma.car.findMany({
            where: {userId: user?.id, active: true}
        })

        if(user && userCars.length === 1){
            await prisma.user.update({
                where: {id: user.id},
                data: {haveCar: false}
            })
        }
        
         const result1 = await prisma.car.update({
            where: { id },
            data: {active: false, mainCar:false}
        })

        if(result.mainCar === true && user){
            const n = await prisma.car.findFirst({
                where: {userId: user.id}
            })

            if(n){
            await prisma.car.update({
                where: {id: n.id },
                data: {mainCar: true}
            })
        }

        const mainCars = await prisma.car.findMany({
            where: {userId: user.id, active: true, mainCar: true}
        })

        if(mainCars.length > 1){
            let i = 1;
            while(i < mainCars.length){
                await prisma.car.update({
                    where: {id: mainCars[i].id},
                    data: {mainCar: false}
                })

                i++;
            }
        }
        }

    }
    
}