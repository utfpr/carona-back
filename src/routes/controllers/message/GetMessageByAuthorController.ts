import { Request, Response } from "express";
import { IMesageRepository } from "../../../interfaces/IMessageRepository";
import { GetMessageByAuthorService } from "../../../services/message/GetMessageByAuthorService";

export class GetMessageByAuthorController{
    constructor(private messageRepo: IMesageRepository){}
    async handle(req: Request, res: Response): Promise<Response>{

    const { id } = req.params;

    const Id = parseInt(id, 10);

    const getMessageByAuthorService = new GetMessageByAuthorService(this.messageRepo)
    const result = await getMessageByAuthorService.execute({authorId:Id})

    return res.json(result)

    }
}