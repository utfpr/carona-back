import { IPassengerCreateRequest, IPassengerReturn } from "./IPassengersInterface";


export interface IPassengerRepository{
    insert(props: IPassengerCreateRequest): Promise<IPassengerReturn>
    delete(id: number): Promise<void>
    get(id: number): Promise<IPassengerReturn>
    listRacePassengers(raceId: number): Promise<IPassengerReturn[]>
    listUserRaces(userId: number): Promise<IPassengerReturn[]>
}