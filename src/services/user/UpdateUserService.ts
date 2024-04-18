import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserUpdateRequest } from "../../interfaces/IUserInterface";
import {
  validateEmail,
  validatePassword,
} from "../../utils/validate";
import { User } from "../../entities/user";
import { AppError } from "../../errors/AppError";

export class UpdateUserService {
  constructor(private userRepo: IUserRepository) {}
  async execute({
    id,
    name,
    email,
    password,
  }: IUserUpdateRequest): Promise<IUser> {
    const result = await this.userRepo.findOneUser(id);

    if (email && !validateEmail(email)) {
      throw new AppError("Nome de usuário inválido. São necessários pelo menos 3 caracteres");
    }

    if (password && !validatePassword(password)) {
      throw new AppError(
        "A senha deve possuir pelo menos 5 caracteres"
      );
    }


    const user = new User(
      {
        name: name || result.name,
        email: email || result.email,
        password: password || result.password
      },
      result.id
    );

    const result2 = await this.userRepo.update(user.toJSON(), id);

    return result2
  }
}
