import { Request, Response } from "express"
import { IChatRepository } from "../../../interfaces/IChatRepository";
import { IChatUpdateRequest } from "../../../interfaces/IChatInterface";
import { UpdateChatService } from "../../../services/chat/UpdateChatService";

export class UpdateChatController{
    constructor(private chatRepo: IChatRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

        const { name }: IChatUpdateRequest = req.body;

        const updateChatService = new UpdateChatService(this.chatRepo)

        const result = await updateChatService.execute({
            id: Id,
            name: name
        })

        return res.status(201).json(result)
    }
}