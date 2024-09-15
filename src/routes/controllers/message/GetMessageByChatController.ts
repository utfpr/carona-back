import { IMesageRepository } from "../../../interfaces/IMessageRepository";
import { Request, Response } from "express"
import { GetMessageByChatService } from "../../../services/message/GetMessageByChatService";

export class GetMessageByChatController{
    constructor(private messageRepo: IMesageRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

        const getMessageByChatService = new GetMessageByChatService(this.messageRepo)
        const result = await getMessageByChatService.execute({chatId: Id})

        return res.json(result)
    }
}