import { PrismaClient } from "@prisma/client";
import { IMesageRepository } from "../interfaces/IMessageRepository";
import { IMessage, IMessageCreateRequest } from "../interfaces/IMessageInterface";
import { AppError } from "../errors/AppError";


 const prisma = new PrismaClient();

 export class MessageRepository implements IMesageRepository{
     async create(props: IMessageCreateRequest): Promise<IMessage> {

        const authorData = await prisma.user.findUnique({
            where: {id: props.authorId}
        })
        
        let authorName;
        if(authorData) authorName = authorData.name;

         const result = await prisma.message.create({
            data: {author: authorName || "", authorId: props.authorId, chatId: props.chatId, content: props.content}
         });

         return result
     }

     async get(id: number): Promise<IMessage> {

        
         const result = await prisma.message.findUnique({
            where: {id}
         })

         if(!result) throw new AppError("Message not found")

         return result
     }

     async getByChat(chatId: number): Promise<IMessage[]> {
         const result = await prisma.message.findMany({
            where: {chatId}
         })

         return result
     }

     async getByAuthor(authorId: number): Promise<IMessage[]> {
         
        const result = await prisma.message.findMany({
            where: {authorId}
        })

        return result
     }
 }