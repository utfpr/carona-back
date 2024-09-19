import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUser, IUserReturn } from "../interfaces/IUserInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository{
    async findByRa(ra: string): Promise<IUserReturn> {
        const result = await prisma.user.findUnique({
            where: { ra },
            include: {
                car: true
            }
        })

        if(!result) throw new AppError("User not found")

        return result
    }

    async findByEmail(email: string): Promise<IUserReturn> {
        let result = await prisma.user.findUnique({
            where: { email },
            include: { 
                car: true
            }
          });

          if(!result){
            throw new AppError("User not found")
          }

          return result;
    }
    async findAll(): Promise<IUserReturn[]> {
        const result = await prisma.user.findMany({
            include: {
                car: true
            }
        })
        return result;
    }
    
    async insert(props: IUser): Promise<IUserReturn> {

        props.haveCar = false;

        const result = await prisma.user.create({
            data: props,
            include:{
                car: true
            }
        })

        return result
    }

    async findOneUser(id: number): Promise<IUserReturn> {
        const result = await prisma.user.findUnique({
            where: { id },
            include:{
                car: true
            }
        })

        if(!result) throw Error('User not fund')
        return result;
    }

    async update(props: IUser, id: number): Promise<IUserReturn> {
        const result = await prisma.user.update({
            where: { id },
            data: {name: props.name, email: props.email, haveCar: props.haveCar, password: props.password},
            include: {
                car: true
            }
        })

        return result
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({
            where: { id }
        })
    }
}