import { Message } from "../../entities/message";
import { IMessage, IMessageCreateRequest } from "../../interfaces/IMessageInterface";
import { IMesageRepository } from "../../interfaces/IMessageRepository";

export class CreateMessageService{
    constructor(private messageRepo: IMesageRepository){}
    async execute({
        chatId, authorId, content
    }: IMessageCreateRequest): Promise<IMessage>{

        const result = await this.messageRepo.create({chatId, authorId, content})

        return result

    }
}