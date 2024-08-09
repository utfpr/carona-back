import { IConfirmEmailRepository } from "../../interfaces/IConfirmEmailRepository";

export class CompareEmailCodeService{
    constructor(private cmRepo: IConfirmEmailRepository){}

    async execute(email: string, code: number): Promise<any>{
       const v = this.cmRepo.compare(email, code);

       if(!v) return "código inválido"

       return v
    }
}