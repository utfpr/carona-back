import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRace, IRaceDeleteRequest } from "../../interfaces/IRaceInterface";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IPassengerRepository } from "../../interfaces/IPassengerRepository";
import { DeleteRaceNotificationService } from "../notification/DeleteRaceNotificationService";

export class DeleteRaceService{
    constructor(private raceRepo: IRaceRepository,
        private userRepo: IUserRepository,
        private passengerRepo: IPassengerRepository){}
    async execute({id}: IRaceDeleteRequest):Promise<void>{
        
        await this.raceRepo.findOneRace(id)

        const notification = new DeleteRaceNotificationService(this.raceRepo, this.userRepo, this.passengerRepo);
        
        await notification.execute(id)

        await this.raceRepo.delete(id)
    }
}