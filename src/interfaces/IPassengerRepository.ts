import { IPassenger, IPassengerCreateRequest } from "./IPassengersInterface";
import { IRace } from "./IRaceInterface";

export interface IPassengerRepository{
    insert(props: IPassengerCreateRequest): Promise<IPassenger>
    delete(id: number): Promise<void>
    get(id: number): Promise<IPassenger>
    listRacePassengers(raceId: number): Promise<IPassenger[]>
    listUserRaces(userId: number): Promise<IPassenger[]>
}

