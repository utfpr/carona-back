import { IMesageRepository } from "../../../interfaces/IMessageRepository";
import { CreateMessageService } from "../../../services/message/CreateMessageService";
import { Request, Response } from "express";

export class CreateMessageController{
    constructor(private messageRepo: IMesageRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const{chatId, authorId, content} = req.body;
        console.log("controller")
        const createMessageService = new CreateMessageService(this.messageRepo)

        const message = await createMessageService.execute({ chatId, authorId, content})

        return res.status(201).json(message)
    }
}