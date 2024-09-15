import { IChatRepository } from "../../../interfaces/IChatRepository";
import { ListChatService } from "../../../services/chat/ListChatService";
import { Request, Response } from "express"

export class ListChatsController{
    constructor(private chatRepo: IChatRepository){}
    async handle(_: Request, res: Response): Promise<Response>{
        const listChatService = new ListChatService(this.chatRepo)
        const chats = await listChatService.execute()

        return res.json(chats)
    }
}