import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserUpdateRequest } from "../../interfaces/IUserInterface";
import {
  validateConfimPassword,
  validateConfirmEmail,
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
    ra,
    confirmEmail,
    confirmPassword
  }: IUserUpdateRequest): Promise<IUser> {
    const result = await this.userRepo.findOneUser(id);

    if(!validateEmail(email)) throw new AppError('invalid email or password')

    if(!validatePassword(password)) throw new AppError('invalid email or password')

    if(confirmEmail && !validateConfirmEmail(email, confirmEmail)) throw new AppError('invalid email or password')

    if(confirmPassword && !validateConfimPassword(password, confirmPassword)) throw new AppError('invalid email or password')
    


    const user = new User(
      {
        name: name || result.name,
        email: email || result.email,
        password: password || result.password,
        haveCar: result.haveCar,
        ra: ra || result.ra
      },
      result.id
    );
    

    const result2 = await this.userRepo.update(user.toJSON(), id);

    return result2
  }
}
