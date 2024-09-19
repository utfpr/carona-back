import { IMessage, IMessageGetRequest } from "../../interfaces/IMessageInterface";
import { IMesageRepository } from "../../interfaces/IMessageRepository";

export class GetMessageService{
    constructor(private messageRepo: IMesageRepository){}
    async execute({id}: IMessageGetRequest): Promise<IMessage>{
        const result = await this.messageRepo.get(id)
        return result
    }
}