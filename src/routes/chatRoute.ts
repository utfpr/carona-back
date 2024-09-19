import { Request, Response, Router } from "express";
import { IChatRepository } from "../interfaces/IChatRepository";
import { ChatRepository } from "../repositories/ChatRepository";
import { UpdateChatController } from "./controllers/chat/UpdateChatController";
import { ListChatsController } from "./controllers/chat/ListChatController";
import { resolveController } from "../adapters/resolverController";

export const chatRoute = Router();

const chatRepo: IChatRepository = new ChatRepository()
const updateChatController = new UpdateChatController(chatRepo)
const listChatController = new ListChatsController(chatRepo)

chatRoute.get('/', resolveController(async(req: Request, res: Response) => {
    return await listChatController.handle(req, res)
}))

chatRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updateChatController.handle(req, res)
}))