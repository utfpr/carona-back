import { IUserRepository } from "../../interfaces/IUserRepository"
import { IUser, IUserDeleteRequest } from "../../interfaces/IUserInterface"

export class DeleteUserService{
    constructor(private userRepo: IUserRepository) {}
    async execute({ id }: IUserDeleteRequest): Promise<void> {
        await this.userRepo.findOneUser(id)
    await this.userRepo.delete(id)  

}
}