import { race } from "../../entities/race";
import { AppError } from "../../errors/AppError";
import { IRaceRepository } from "../../interfaces/IRaceRepository";
import { IRaceCreateRequest } from "../../interfaces/IRaceInterface";

export class CreateRaceService{
    constructor(private raceRepo: IRaceRepository){}
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
        seats
        });

        await this.raceRepo.insert(Race.toJSON())
    }
}