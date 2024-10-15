import { PrismaClient } from "@prisma/client";
import { IChatRepository } from "../interfaces/IChatRepository";
import { IChat, IChatReturn } from "../interfaces/IChatInterface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class ChatRepository implements IChatRepository{
    async get(id: number): Promise<IChat> {
        const result = await prisma.chat.findUnique({
            where: {id}
        })

        if(!result)throw new Error("User not found");

        return result
    }
    
    async findAll(): Promise<IChat[]> {
        const result = await prisma.chat.findMany();

        return result
    }
    
    async create(props: IChat): Promise<IChat> {
        const result = await prisma.chat.create({
            data:props
        })

        return result
    }

    async update(id: number, name: string): Promise<IChat> {
        const result1 = await prisma.chat.findUnique({
            where: {id}
        })

        if(!result1) throw new AppError("chat not found")

        const result = await prisma.chat.update({
            where: { id },
            data: {name}
        });

        return result
    }
}