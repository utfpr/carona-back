import { Request, Response } from "express";
import { IHashRepository } from "../../../interfaces/IHashRepository";
import { IJWTRepository } from "../../../interfaces/IJWTRepository";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { AuthenticateUserService } from "../../../services/user/AuthenticateUserService";
import { AuthenticateUserByRaService } from "../../../services/user/AuthenticateUserByRaService";


export class AuthenticateUserByRaController {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository,
        private hashRepo: IHashRepository
    ) { };

    async handle(req: Request, res: Response): Promise<Response> {
        const { ra, password } = req.body;
        
        const authenticateUserService = new AuthenticateUserByRaService(this.userRepo, this.jwtRepo, this.hashRepo);
        const result = await authenticateUserService.execute({ra, password});

        return res.status(201).json(result)
    }
}