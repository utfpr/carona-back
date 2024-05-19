import { createUUID } from "../utils/createUUID";
import { IPassenger } from "../interfaces/IPassengersInterface";

export class Passenger{
    id: IPassenger['id'];
    userId: IPassenger['userId']
    raceId: IPassenger['raceId']
    active: IPassenger['active']
    createdAt?: IPassenger['createdAt'];
    updatedAt?: IPassenger['updatedAt'];

    constructor(props: Omit<IPassenger, 'id'>, id?: string){
        this.id = id || createUUID();
        this.userId = props.userId;
        this.raceId = props.raceId;
        this.active = true
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
    }

    toJson(): IPassenger{
        return{
            id: this.id,
            userId: this.userId,
            raceId: this.raceId,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}