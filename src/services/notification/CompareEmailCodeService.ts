import { IConfirmEmailRepository } from "../../interfaces/IConfirmEmailRepository";

export class CompareEmailCodeService{
    constructor(private cmRepo: IConfirmEmailRepository){}

    async execute(email: string, code: number): Promise<void>{
       this.cmRepo.compare(email, code);
    }
}