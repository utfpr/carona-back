import { Request, Response, Router } from "express";
import { IConfirmEmailRepository } from "../interfaces/IConfirmEmailRepository";
import { ConfirmEmailRepository } from "../repositories/confirmEmailRepository";
import { ConfirmEmailController } from "./controllers/confirmEmail/confirmEmailController";
import { resolveController } from "../adapters/resolverController";

export const compareCodeRoute = Router();

const cmRepo: IConfirmEmailRepository = new ConfirmEmailRepository;
const confirmEmailController = new ConfirmEmailController(cmRepo)

compareCodeRoute.post('/:email', resolveController(async(req: Request, res: Response) => {
    return await confirmEmailController.handle(req, res)
}))