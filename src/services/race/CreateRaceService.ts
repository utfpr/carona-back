import { race } from "../../entities/race";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRaceCreateRequest } from "../../interfaces/IRaceInterface";
import { IChatRepository } from "../../interfaces/IChatRepository";
import { Chat } from "../../entities/chat";

export class CreateRaceService{
    constructor(private raceRepo: IRaceRepository, private chatRepo: IChatRepository){}
    async execute({
        originPoint,
        endPoint,
        timeStart,
        userId,
        carId,
        seats
    }: IRaceCreateRequest): Promise<void>{
        const Race = new race({
        originPoint,
        endPoint,
        timeStart,
        userId,
        carId,
        seats,
        active: true
        });

        const result = await this.raceRepo.insert(Race.toJSON())

        let chat = new Chat({
            raceId: result.id,
            name: result.id.toString() 
        })

        await this.chatRepo.create(chat)
    }
}