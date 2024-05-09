import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUser } from "../interfaces/IUserInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository{
    async findByEmail(email: string): Promise<IUser> {
        let result = await prisma.user.findUnique({
            where: { email },
          });

          if(!result){
            throw new AppError("batata")
          }

          return result;
    }
    async findAll(): Promise<IUser[]> {
        const result = await prisma.user.findMany({
            include: {
                car: true
            }
        })
        return result;
    }
    
    async insert(props: IUser): Promise<IUser> {

        props.haveCar = false;

        const result = await prisma.user.create({
            data: props,
            include:{
                car: true
            }
        })

        return result
    }

    async findOneUser(id: string): Promise<IUser> {
        const result = await prisma.user.findUnique({
            where: { id },
            include:{
                car: true
            }
        })

        if(!result) throw Error('User not fund')
        return result;
    }

    async update(props: IUser, id: string): Promise<IUser> {
        const result = await prisma.user.update({
            where: { id },
            data: {name: props.name, email: props.email, haveCar: props.haveCar},
            include: {
                car: true
            }
        })

        return result
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: { id }
        })
    }

    
    
}