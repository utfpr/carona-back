import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { IUser, IUserUpdateRequest } from "../../../interfaces/IUserInterface";
import { UpdateUserService } from "../../../services/user/UpdateUserService";

export class UpdateUserController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } =req.params;
        const {name, email, password, ra, confirmEmail, confirmPassword, actualPassword }: IUserUpdateRequest = req.body;
        console.log('1')
        const updateUserService = new UpdateUserService(this.userRepo)
        console.log('2')
        await updateUserService.execute({
            id, 
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
