import { Request, Response, Router } from "express";
import { PassengerRepository } from "../repositories/PassengerRepository";
import { CreatePassengerController } from "./controllers/passengers/CreatePassengerController";
import { DeletePassengerController } from "./controllers/passengers/DeletePassengerController";
import { resolveController } from "../adapters/resolverController";

export const passengerRoute = Router();

const passengerRepo = new PassengerRepository()
const createPassengerController = new CreatePassengerController(passengerRepo)
const deletePassengerController = new DeletePassengerController(passengerRepo)

passengerRoute.post('/user/:userId/race/:raceId', resolveController(async (req: Request, res: Response) => {
    return await createPassengerController.handle(req, res)
}))

passengerRoute.delete('/:id', resolveController(async (req: Request, res: Response) => {
    return await deletePassengerController.handle(req,res)
}))