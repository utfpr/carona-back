import { Request, Response, Router } from "express";
import { IMesageRepository } from "../interfaces/IMessageRepository";
import { MessageRepository } from "../repositories/MessageRepository";
import { CreateMessageController } from "./controllers/message/CreateMessageController";
import { GetMessageController } from "./controllers/message/GetMessageController";
import { GetMessageByChatController } from "./controllers/message/GetMessageByChatController";
import { GetMessageByAuthorService } from "../services/message/GetMessageByAuthorService";
import { resolveController } from "../adapters/resolverController";
import { GetMessageByAuthorController } from "./controllers/message/GetMessageByAuthorController";

export const messageRoute = Router();

const messageRepo: IMesageRepository = new MessageRepository()
const createMessageController = new CreateMessageController(messageRepo)
const getMessageController = new GetMessageController(messageRepo)
const getMessageByChatController = new GetMessageByChatController(messageRepo)
const getMessageByAuthorController = new GetMessageByAuthorController(messageRepo)

messageRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createMessageController.handle(req, res)
}))

messageRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getMessageController.handle(req, res)
}))

messageRoute.get('/chat/:id', resolveController(async(req: Request, res: Response) => {
    return await getMessageByChatController.handle(req, res)
}))

messageRoute.get('/author/:id', resolveController(async(req: Request, res: Response) => {
    return await getMessageByAuthorController.handle(req, res)
}))