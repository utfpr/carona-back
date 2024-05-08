import { Request, Response, Router } from "express";
import { RaceRepository } from "../repositories/RaceRepository";
import { CreateRaceController } from "./controllers/race/CreateRaceController";
import { GetRaceController } from "./controllers/race/GetRaceController";
import { ListRacesController } from "./controllers/race/ListRaceController";
import { UpdateRaceController } from "./controllers/race/UpdateRaceController";
import { DeleteRaceController } from "./controllers/race/DeleteRaceController";
import { resolveController } from "../adapters/resolverController";
import { IRaceRepository } from "../interfaces/IRaceRepository";
import { HistoricRaceController } from "./controllers/race/HistoricRaceController";

export const raceRoute = Router();

const raceRepo: IRaceRepository = new RaceRepository()
const createRaceController = new CreateRaceController(raceRepo)
const getRaceController = new GetRaceController(raceRepo)
const listRaceController = new ListRacesController(raceRepo)
const updateRaceController = new UpdateRaceController(raceRepo)
const deleteRaceController = new DeleteRaceController(raceRepo)
const historicRaceController = new HistoricRaceController(raceRepo)

raceRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createRaceController.handle(req, res)
}))

raceRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getRaceController.handle(req, res)
}))

raceRoute.get('/', resolveController(async(_: Request, res: Response) => {
    return await listRaceController.handle(_, res)
}))

raceRoute.get('/historic/:id', resolveController(async(req: Request, res: Response) => {
    return await historicRaceController.handle(req, res)
}))

raceRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updateRaceController.handle(req, res)
}))

raceRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deleteRaceController.handle(req, res)
}))


