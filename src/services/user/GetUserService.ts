import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserGetRequest } from "../../interfaces/IUserInterface";

export class GetUserService {
  constructor(private userRepo: IUserRepository) {}
  async execute({ id }: IUserGetRequest): Promise<IUser> {
    const result = await this.userRepo.findOneUser(id);
    return result;
  }
}
