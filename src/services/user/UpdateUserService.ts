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
      

      if(!validatePassword(password)) throw new AppError('invalid email or password')
        

        if(confirmEmail && !validateConfirmEmail(email, confirmEmail)) throw new AppError('invalid email or password')
          

          if(confirmPassword && !validateConfimPassword(password, confirmPassword)) throw new AppError('invalid email or password')
            

    const result = await this.userRepo.findOneUser(id);
    

    if(actualPassword) this.hashRepo.uncryptographie(actualPassword, result.password)


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
