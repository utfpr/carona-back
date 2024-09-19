import { IPassenger, IPassengerCreateRequest, IPassengerReturn } from "./IPassengersInterface";
import { IRace } from "./IRaceInterface";

export interface IPassengerRepository{
    insert(props: IPassengerCreateRequest): Promise<IPassengerReturn>
    delete(id: number): Promise<void>
    get(id: number): Promise<IPassengerReturn>
    listRacePassengers(raceId: number): Promise<IPassengerReturn[]>
    listUserRaces(userId: number): Promise<IPassengerReturn[]>
}