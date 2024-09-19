import { Request, Response } from "express";
import { IUserRepository } from "../../../interfaces/IUserRepository";
import { DeleteUserService } from "../../../services/user/DeleteUserService";

export class DeleteUserController{
    constructor(private userRepo: IUserRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const Id = parseInt(req.params.id, 10);

    const deleteUserService = new DeleteUserService(this.userRepo)
    await deleteUserService.execute({ id: Id })


    return res.status(200).send()
}
}