import { AppError } from "../../errors/AppError";
import { IHashRepository } from "../../interfaces/IHashRepository";
import { IJWTRepository } from "../../interfaces/IJWTRepository";
import { IUserAuthenticateByRaRequest, IUserAuthenticateRequest } from "../../interfaces/IUserInterface";
import { IUserRepository } from "../../interfaces/IUserRepository";


export class AuthenticateUserByRaService {
    constructor(
        private userRepo: IUserRepository, 
        private jwtRepo: IJWTRepository, 
        private hashRepo: IHashRepository
    ) { }
    
    async execute({ra, password}: IUserAuthenticateByRaRequest): Promise<Object> {
        const user = await this.userRepo.findByRa(ra);
        if(user) {
            console.log(user.password, "===", password)
            
            const b =  await this.hashRepo.uncryptographie(password, user.password)
            
            if(b === true) {
                const token = this.jwtRepo.generate({ email: user.email!, id: user.id })
                console.log(token)

                return { user, token }

            } else throw new AppError("Incorrect password");

        } else throw new AppError("This user doesn't exists");
    }
}