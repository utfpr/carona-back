import { IPassenger } from "../interfaces/IPassengersInterface";

export class Passenger{
    userId: IPassenger['userId']
    raceId: IPassenger['raceId']
    active: IPassenger['active']
    createdAt?: IPassenger['createdAt'];
    updatedAt?: IPassenger['updatedAt'];
    name: IPassenger['name']

    constructor(props: Omit<IPassenger, 'id'>, id?: string){
        this.userId = props.userId;
        this.raceId = props.raceId;
        this.active = true
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
        this.name = props.name;
    }

    toJson(): IPassenger{
        return{
            userId: this.userId,
            raceId: this.raceId,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            name: this.name
        }
    }
}