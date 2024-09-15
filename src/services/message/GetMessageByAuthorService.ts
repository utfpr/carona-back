import { IMessage, IMessageGetByAuthorRequest } from "../../interfaces/IMessageInterface";
import { IMesageRepository } from "../../interfaces/IMessageRepository";

export class GetMessageByAuthorService{
    constructor(private messageRepo: IMesageRepository){}
    async execute({authorId}: IMessageGetByAuthorRequest): Promise<IMessage[]>{
        const result = await this.messageRepo.getByAuthor(authorId)
        return result
    }
}