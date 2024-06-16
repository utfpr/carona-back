import { IPassenger, IPassengerCreateRequest } from "./IPassengersInterface";
import { IRace } from "./IRaceInterface";

export interface IPassengerRepository{
    insert(props: IPassengerCreateRequest): Promise<IPassenger>
    delete(id: string): Promise<void>
    get(id: string): Promise<IPassenger>
    listRacePassengers(raceId: string): Promise<IPassenger[]>
    listUserRaces(userId: string): Promise<IPassenger[]>
}

