import * as nodemailer from "nodemailer";
import config from "../../config/config";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IRaceRepository } from "../../interfaces/IRaceRepository";

export class PassengerExitNotificationService{
    constructor(
        private passengerRepo: IPassengerRepository,
        private userRepo: IUserRepository,
        private raceRepo: IRaceRepository
        ) {}

    async execute(passengerId: number): Promise<void>{
        const passenger = await this.passengerRepo.get(passengerId)
        const race = await this.raceRepo.findOneRace(passenger.raceId)
        const driver = await this.userRepo.findOneUser(race.userId)
        const user = await this.userRepo.findOneUser(passenger.userId)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
              user: config.notification.email,
              pass: config.notification.password,
            },
        });

        const mailOptions = {
            from: `Carona Solidária <${config.notification.email}>`,
            to: driver.email,
            subject: `O usuário ${user.name} não está mais na sua corrida` ,
            text: `O usuário ${user.name} foi removido ou optou por não participar mais da sua corrida saindo de ${race.originPoint} até ${race.endPoint}`
        };

        const userMail = {
            from: `Carona Solidária <${config.notification.email}>`,
            to: user.email,
            subject: `Você não faz mais parte da corrida de ${driver.name}` ,
            text: `Você foi removido da corrida de ${driver.name}, com origem em ${race.originPoint} e o destino ${race.endPoint}. Essa ação pode ter partido de você ou do criador da corrida.`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Email enviado: " + info.response);
            }
        })

        transporter.sendMail(userMail,(err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Email enviado: " + info.response);
            }
        })
 
    }
    
}