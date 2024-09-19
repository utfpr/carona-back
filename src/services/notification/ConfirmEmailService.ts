import * as nodemailer from "nodemailer";
import config from "../../config/config";
import { IConfirmEmailRepository } from "../../interfaces/IConfirmEmailRepository";

export class ConfirmEmailService{
    constructor(private cmRepo: IConfirmEmailRepository){}

    async execute(email: string): Promise<void>{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
              user: config.notification.email,
              pass: config.notification.password,
            },
        })

        const code = Math.floor(100000 + Math.random() * 900000);

        await this.cmRepo.create(email, code)

        const mailOptions = {
            from: `Carona Solidária <${config.notification.email}>`,
            to: email,
            subject: `Código de confirmação`,
            text: `Seu código de confirmção é ${code}. Não compartilhe seu código com ninguém.`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err);
            }else{
                console.log("Email enviado: " + info.response);
            }
        })
    }
}