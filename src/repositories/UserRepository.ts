import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IUser } from "../interfaces/IUserInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository{
    async findByEmail(email: string): Promise<IUser> {
        let result = await prisma.user.findFirst({
            where: { email },
          });

          if(!result){
            throw new AppError("batata")
          }

          return result;
    }
    async findAll(): Promise<IUser[]> {
        const  result = await prisma.user.findMany()
        return result;
    }
    
    async insert(props: IUser): Promise<IUser> {
        const result = await prisma.user.create({
            data: props
        })

        return result
    }

    async findOneUser(id: string): Promise<IUser> {
        const result = await prisma.user.findUnique({
            where: { id }
        })

        if(!result) throw Error('User not fund')
        return result;
    }

    async update(props: IUser, id: string): Promise<IUser> {
        const result = await prisma.user.update({
            where: { id },
            data: props
        })

        return result
    }

    async delete(id: string): Promise<void> {
        await prisma.user.delete({
            where: { id }
        })
    }

    
    
}