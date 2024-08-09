import { validateConfimPassword, validateConfirmEmail, validateEmail, validatePassword} from "../../utils/validate";
import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUser, IUserCreateRequest } from "../../interfaces/IUserInterface";
import { AppError } from "../../errors/AppError";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { ConfirmEmailService } from "../notification/ConfirmEmailService";
import { IConfirmEmailRepository } from "../../interfaces/IConfirmEmailRepository";

export class CreateUserService{
    constructor(
        private userRepo: IUserRepository, private hashRepo: IHashRepository, private cmRepo: IConfirmEmailRepository
    ){}
    async execute({
        name, email, password, ra, confirmEmail, confirmPassword
    }: IUserCreateRequest): Promise<IUser>
{

    if(!validateEmail(email)) throw new AppError('invalid email or password')

        if(!validatePassword(password)) throw new AppError('invalid email or password')
    
        if(confirmEmail && !validateConfirmEmail(email, confirmEmail)) throw new AppError('invalid email or password')
    
        if(confirmPassword && !validateConfimPassword(password, confirmPassword)) throw new AppError('invalid email or password')

    password = await this.hashRepo.cryptographie(password);

    const user = new User({
        name,
        email,
        password,
        haveCar: false,
        ra,
        active: true
    })

    let userdata = user.toJSON();

    await this.userRepo.insert(userdata);

    const notification = new ConfirmEmailService(this.cmRepo)
        
    await notification.execute(email)

    return {...userdata};
}}