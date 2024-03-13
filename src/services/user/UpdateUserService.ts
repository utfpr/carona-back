import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUserUpdateRequest } from "../../interfaces/IUserInterface";
import {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
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
  }: IUserUpdateRequest): Promise<void> {
    const result = await this.userRepo.findOneUser(id);

    if (email && !validateEmail(email)) {
      throw new AppError("Email inválido");
    }

    if (password && !validatePassword(password)) {
      throw new AppError(
        "A senha deve possuir pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
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

    await this.userRepo.update(user.toJSON(), id);
  }
}
