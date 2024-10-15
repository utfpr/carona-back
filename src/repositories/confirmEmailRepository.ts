import { PrismaClient } from "@prisma/client";
import { AppError } from "../errors/AppError";
import { IConfirmEmailRepository } from "../interfaces/IConfirmEmailRepository";

const prisma = new PrismaClient();

export class ConfirmEmailRepository implements IConfirmEmailRepository{
    async create(email: string, code: number): Promise<void> {
        await prisma.confirmEmail.create({
            data: {email: email, code: code}
        })
    }

    async compare(email: string, code: number): Promise<boolean> {
        const result = await prisma.confirmEmail.findUnique({
            where: { email }
        })

        if(!result) throw new AppError("User not found")

        if(code !== result.code) throw new AppError("Invalid Code")

        return true
    }

    async delete(email: string): Promise<void> {
        await prisma.confirmEmail.delete({
            where: {email}
        })
    }
}