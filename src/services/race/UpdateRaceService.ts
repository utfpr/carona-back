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
        carId
    }: IRaceUpdateRequest): Promise<void>{
        const result = await this.raceRepo.findOneRace(id)

        const Race = new race({
            originPoint: originPoint || result.originPoint,
            endPoint: endPoint || result.endPoint,
            timeStart: timeStart || result.timeStart,
            userId: result.userId,
            carId: result.carId
        }, result.id);

        await this.raceRepo.update(Race.toJSON(), id);
    }
}