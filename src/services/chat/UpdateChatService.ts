import { IChat, IChatUpdateRequest } from "../../interfaces/IChatInterface";
import { IChatRepository } from "../../interfaces/IChatRepository";

export class UpdateChatService{
    constructor(private chatRepo: IChatRepository){}
    async execute({ id, name}: IChatUpdateRequest): Promise<IChat>{
        const result = await this.chatRepo.update(id, name)

        return result
    }
}