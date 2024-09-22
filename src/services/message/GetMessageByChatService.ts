import { IMessage, IMessageGetByAuthorRequest, IMessageGetByChatRequest } from "../../interfaces/IMessageInterface";
import { IMesageRepository } from "../../interfaces/IMessageRepository";

export class GetMessageByChatService{
    constructor(private messageRepo: IMesageRepository){}
    async execute({chatId}: IMessageGetByChatRequest): Promise<IMessage[]>{
        const result = await this.messageRepo.getByChat(chatId)
        return result
    }
}