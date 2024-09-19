import { Request, Response } from "express";
import { IMesageRepository } from "../../../interfaces/IMessageRepository";
import { GetMessageByAuthorService } from "../../../services/message/GetMessageByAuthorService";
import { GetMessageService } from "../../../services/message/GetMessageService";

export class GetMessageController{
    constructor(private messageRepo: IMesageRepository){}
    async handle(req: Request, res: Response): Promise<Response>{

    const { id } = req.params;
        console.log("cheguei aq", id)
    const Id = parseInt(id, 10);

    const getMessageService = new GetMessageService(this.messageRepo)
    const result = await getMessageService.execute({id:Id})

    return res.json(result)

    }
}