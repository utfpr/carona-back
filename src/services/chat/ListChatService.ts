import { IChat } from "../../interfaces/IChatInterface";
import { IChatRepository } from "../../interfaces/IChatRepository";

export class ListChatService{
    constructor(private chatRepo: IChatRepository){}
    async execute(): Promise<IChat[]>{
        const chats = await this.chatRepo.findAll()
        return chats
    }
}