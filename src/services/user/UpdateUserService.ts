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
import { IHashRepository } from "../../interfaces/IHashRepository";

export class UpdateUserService {
  constructor(private userRepo: IUserRepository, private hashRepo: IHashRepository) {}
  async execute({
    id,
    name,
    email,
    password,
    ra,
    confirmEmail,
    confirmPassword, actualPassword
  }: IUserUpdateRequest): Promise<IUser> {
    

    if(!validateEmail(email)) throw new AppError('invalid email or password')
      console.log("1")

      if(!validatePassword(password)) throw new AppError('invalid email or password')
        console.log("2")

        if(confirmEmail && !validateConfirmEmail(email, confirmEmail)) throw new AppError('invalid email or password')
          console.log("3")

          if(confirmPassword && !validateConfimPassword(password, confirmPassword)) throw new AppError('invalid email or password')
            console.log("4")

    const result = await this.userRepo.findOneUser(id);
    console.log("5")

    if(actualPassword) this.hashRepo.uncryptographie(actualPassword, result.password)

      console.log("6")

    password = await this.hashRepo.cryptographie(result.password);
    
    const user = new User(
      {
        name: name || result.name,
        email: email || result.email,
        password: password || result.password,
        haveCar: result.haveCar,
        ra: ra || result.ra,
        active: true
      }
    );
    

    const result2 = await this.userRepo.update(user.toJSON(), id);

    return result2
  }
}
