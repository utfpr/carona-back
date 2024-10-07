import { Request, Response } from "express"
import { IChatRepository } from "../../../interfaces/IChatRepository";
import { GetChatService } from "../../../services/chat/GetChatRepository";

export class GetChatController{
    constructor(private chatRepo: IChatRepository){}
    async handle(req:Request, res: Response): Promise<Response>{
        const {id} = req.params;

        const Id = parseInt(req.params.id, 10);

        const getChatService = new GetChatService(this.chatRepo)

        const result = await getChatService.execute({
            id: Id
        })

        return res.status(201).json(result)
    }
}