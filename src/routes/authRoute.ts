import { Router, Request, Response } from "express";
import { resolveController } from "../adapters/resolverController";
import { ICryptoRepository } from "../interfaces/ICryptoRepository";
import { IHashRepository } from "../interfaces/IHashRepository";
import { IJWTRepository } from "../interfaces/IJWTRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { HashRepository } from "../repositories/HashRepository";
import { JWTRepository } from "../repositories/JWTRepository";
import { UserRepository } from "../repositories/UserRepository";
import { AuthenticateUserController } from "./controllers/user/AuthenticateUserController";
import { CryptoRepository } from "../repositories/CryptoRepository";

export const userAuthenticateRoute = Router();

const cryptoRepo: ICryptoRepository = new CryptoRepository()
const userRepo: IUserRepository = new UserRepository();
const jwtRepo: IJWTRepository = new JWTRepository();
const hashRepo: IHashRepository = new HashRepository();

const authenticateUserController = new AuthenticateUserController(userRepo, jwtRepo, hashRepo);

userAuthenticateRoute.post("/", resolveController(async (req: Request, res: Response) => {
    return await authenticateUserController.handle(req, res);
}))