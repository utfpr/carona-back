import { createUUID } from "../utils/createUUID";
import { IPassenger } from "../interfaces/IPassengersInterface";

export class Passenger{
    id: IPassenger['id'];
    userId: IPassenger['userId']
    raceId: IPassenger['raceId']
    createdAt?: IPassenger['createdAt'];
    updatedAt?: IPassenger['updatedAt'];

    constructor(props: Omit<IPassenger, 'id'>, id?: string){
        this.id = id || createUUID();
        this.userId = props.userId,
        this.raceId = props.raceId,
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IPassenger{
        return{
            id: this.id,
            userId: this.userId,
            raceId: this.raceId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}