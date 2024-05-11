import * as nodemailer from "nodemailer";
import config from "../../config/config";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";

export class DeleteRaceNotificationService{
    constructor(
        private raceRepo: IRaceRepository,
        private userRepo: IUserRepository,
        private passengerRepo: IPassengerRepository
    ) {}

    async execute(raceId: string): Promise<void>{
        const race = await this.raceRepo.findOneRace(raceId)
        const driver = await this.userRepo.findOneUser(race.userId)
        const passengers = await this.passengerRepo.listRacePassengers(raceId)

        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
              user: config.notification.email,
              pass: config.notification.password,
            },
        });

        //notification to driver
        const mailOptions = {
            from: `Carona Solidária <${config.notification.email}>`,
            to: driver.email,
            subject: `Corrida excluída` ,
            text: `Sua corrida ${race.originPoint} até ${race.endPoint} foi excluída. Todos os passageiros já foram informados.`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Email enviado: " + info.response);
            }
        })

        //notification to passengers
        if(passengers.length === 0){
            return 
        } else {
            let i = 0;

            while(i < passengers.length){
                const user = await this.userRepo.findOneUser(passengers[i].userId)
                if(user){
                const passengersMail = {
                    from: `Carona Solidária <${config.notification.email}>`,
                    to: user.email,
                    subject: `Corrida excluída` ,
                    text: `A corrida de ${driver.name}, com origem em ${race.originPoint} em destino em ${race.endPoint}, que você fazia parte, foi excluída. Acesse o app para encontrar uma nova corrida que atenda suas necessidades. `
                }

                transporter.sendMail(passengersMail, (err, info) => {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Email enviado: " + info.response);
                    }
                })
                
              }

              i++;
            }

            
        }
    }
    
}