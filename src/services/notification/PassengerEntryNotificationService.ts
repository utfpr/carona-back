import * as nodemailer from "nodemailer";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ICarRepository } from "../../interfaces/ICarRepository";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import config from "../../config/config";

export class PassengerEntryNotificationService{
    constructor(
        private userRepo: IUserRepository,
        private passengerRepo: IPassengerRepository,
        private raceRepo: IRaceRepository) {}

    async execute(passengerId: number, userId: number): Promise<void>{
        const passenger = await this.passengerRepo.get(passengerId)
        const race = await this.raceRepo.findOneRace(passenger.raceId)
        const user = await this.userRepo.findOneUser(race.userId)

        const entry = await this.userRepo.findOneUser(userId)

        const userName = entry.name

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
            to: user.email,
            subject: `O usuário ${userName} ingressou na sua corrida!!!` ,
            text: `O usuário ${userName} agora faz parte da sua corrida. Caso queira, você pode removê-lo através do app!`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Email enviado: " + info.response);
            }
        })
    }
    
}