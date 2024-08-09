import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { IUser, IUserUpdateRequest } from "../../../interfaces/IUserInterface";
import { UpdateUserService } from "../../../services/user/UpdateUserService";
import { IHashRepository } from "../../../interfaces/IHashRepository";

export class UpdateUserController{
    constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } =req.params;

        const Id = parseInt(req.params.id, 10);

        const {name, email, password, ra, confirmEmail, confirmPassword, actualPassword }: IUserUpdateRequest = req.body;
       
        const updateUserService = new UpdateUserService(this.userRepo, this.hashRepo)
        
        await updateUserService.execute({
            id: Id, 
            name, 
            email, 
            password,
            ra,
            confirmEmail,
            confirmPassword,
            actualPassword
        })

        return res.status(201).json()
    }
}
