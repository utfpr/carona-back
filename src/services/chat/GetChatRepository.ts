import { IChat, IChatGetRequest } from "../../interfaces/IChatInterface";
import { IChatRepository } from "../../interfaces/IChatRepository";

export class GetChatService{
    constructor(private chatRepo: IChatRepository){}
    async execute({id}: IChatGetRequest): Promise<IChat>{
        const chat = await this.chatRepo.get(id)
        return chat
    }
}