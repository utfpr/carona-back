import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserService } from "../../../services/user/CreateUserService";
import { IHashRepository } from "../../../interfaces/IHashRepository";

export class CreateUserController {
    constructor(
      private userRepo: IUserRepository,
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
      console.log("1")
      const createUserService = new CreateUserService(
        this.userRepo
      );
      console.log("2")
      const user = await createUserService.execute({
        name,
        email,
        password,
        ra,
        confirmEmail,
        confirmPassword
      });
      console.log("3")
      return res.status(201).json(user);
    }
  }
  