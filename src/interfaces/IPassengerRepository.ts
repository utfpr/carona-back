import { IPassenger, IPassengerCreateRequest } from "./IPassengersInterface";

export interface IPassengerRepository{
    insert(props: IPassengerCreateRequest): Promise<IPassenger>
    delete(id: string): Promise<void>
}

