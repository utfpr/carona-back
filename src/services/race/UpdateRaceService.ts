import { race } from "../../entities/race";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRaceUpdateRequest } from "../../interfaces/IRaceInterface";

export class UpdateRaceService{
    constructor(private raceRepo: IRaceRepository){}
    async execute({
        id,
        originPoint,
        endPoint,
        timeStart,
        userId,
        carId, 
        seats
    }: IRaceUpdateRequest): Promise<void>{
        const result = await this.raceRepo.findOneRace(id)

        let newSeats = result.seats
        if(seats && result.seats - seats > 0){
        newSeats = result.seats - seats
        }

        const Race = new race({
            originPoint: originPoint || result.originPoint,
            endPoint: endPoint || result.endPoint,
            timeStart: timeStart || result.timeStart,
            userId: result.userId,
            carId: result.carId,
            seats:  newSeats 
        }, result.id);

        await this.raceRepo.update(Race.toJSON(), id);
    }
}