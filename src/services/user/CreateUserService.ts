import { validateConfimPassword, validateConfirmEmail, validateEmail, validatePhoneNumber} from "../../utils/validate";
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
        name, email, password
    }: IUserCreateRequest): Promise<IUser>
{

    const user = new User({
        name,
        email,
        password
    })

    let userdata = user.toJSON();

    await this.userRepo.insert(userdata);

    return {...userdata};
}}