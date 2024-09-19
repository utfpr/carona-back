import { Request, Response} from "express"
import { IConfirmEmailRepository } from "../../../interfaces/IConfirmEmailRepository";
import { ConfirmEmailService } from "../../../services/notification/ConfirmEmailService";
import { CompareEmailCodeService } from "../../../services/notification/CompareEmailCodeService";

export class ConfirmEmailController{
    constructor(private cmRepo: IConfirmEmailRepository){}
    async handle(req: Request, res: Response): Promise<Response>{

        const { code } = req.body;

        const {email} = req.params;

        const compareCodeService = new CompareEmailCodeService(this.cmRepo)

        await compareCodeService.execute(email, code)

        return res.status(201).send()

    }
}