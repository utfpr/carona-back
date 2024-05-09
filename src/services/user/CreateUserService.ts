import { validateConfimPassword, validateConfirmEmail, validateEmail, validatePassword} from "../../utils/validate";
import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserCreateRequest } from "../../interfaces/IUserInterface";
import { AppError } from "../../errors/AppError";
import { IHashRepository } from "../../interfaces/IHashRepository";

export class CreateUserService{
    constructor(
        private userRepo: IUserRepository
    ){}
    async execute({
        name, email, password, ra, confirmEmail, confirmPassword
    }: IUserCreateRequest): Promise<IUser>
{

    const user = new User({
        name,
        email,
        password,
        haveCar: false,
        ra
    })

    let userdata = user.toJSON();

    if(!validateEmail(email)) throw new AppError('invalid email or password')

    if(!validatePassword(password)) throw new AppError('invalid email or password')

    if(confirmEmail && !validateConfirmEmail(email, confirmEmail)) throw new AppError('invalid email or password')

    if(confirmPassword && !validateConfimPassword(password, confirmPassword)) throw new AppError('invalid email or password')

    await this.userRepo.insert(userdata);

    return {...userdata};
}}