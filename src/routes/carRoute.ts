import { Request, Response, Router } from "express";
import { CarRepository } from "../repositories/CarRepository";
import { CreateCarController } from "./controllers/car/CreateCarController";
import { GetCarsController } from "./controllers/car/GetCarsController";
import { ListCarsController } from "./controllers/car/ListCarsController";
import { UpdateCarController } from "./controllers/car/UpdateCarController";
import { DeleteCarController } from "./controllers/car/DeleteCarController";
import { resolveController } from "../adapters/resolverController";
import { ICar } from "../interfaces/ICarInterface";
import { ICarRepository } from "../interfaces/ICarRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { UserRepository } from "../repositories/UserRepository";

export const carRoute = Router();

const carRepo: ICarRepository = new CarRepository()
const userRepo: IUserRepository = new UserRepository()
const createCarController = new CreateCarController(carRepo, userRepo)
const getCarsController = new GetCarsController(carRepo)
const listCarsController = new ListCarsController(carRepo)
const updateCarController = new UpdateCarController(carRepo)
const deleteCarController = new DeleteCarController(carRepo, userRepo)

carRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createCarController.handle(req, res)
}))

carRoute.get('/:id', resolveController(async(req: Request, res: Response) => {
    return await getCarsController.handle(req, res)
}))

carRoute.get('/user/:userId', resolveController(async(req: Request, res: Response) => {
    return await listCarsController.handle(req, res)
}))

carRoute.put('/:id', resolveController(async(req: Request, res: Response) => {
    return await updateCarController.handle(req, res)
}))

carRoute.delete('/:id', resolveController(async(req: Request, res: Response) => {
    return await deleteCarController.handle(req, res)
}))