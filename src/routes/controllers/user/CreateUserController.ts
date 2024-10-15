import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserService } from "../../../services/user/CreateUserService";
import { IHashRepository } from "../../../interfaces/IHashRepository";
import { IConfirmEmailRepository } from "../../../interfaces/IConfirmEmailRepository";

export class CreateUserController {
    constructor(
      private userRepo: IUserRepository,
      private hashRepo: IHashRepository,
      private cmRepo: IConfirmEmailRepository
    ) {}
    async handle(req: Request, res: Response): Promise<Response> {
      const {
        name,
        email,
        password,
        ra,
        confirmEmail,
        confirmPassword
      } = req.body;
      
      const createUserService = new CreateUserService(
        this.userRepo, this.hashRepo,
        this.cmRepo
        
      );
      
      const user = await createUserService.execute({
        name,
        email,
        password,
        ra,
        confirmEmail,
        confirmPassword
      });
     
      return res.status(201).json(user);
    }
  }