import { ICar } from "../interfaces/ICarInterface"
import { createUUID } from "../utils/createUUID"

export class Car{
    id: ICar['id']
    plate: ICar['plate']
    description: ICar['description']
    userId: ICar['userId']
    createdAt: ICar['createdAt']
    updatedAt: ICar['updatedAt']

    constructor(props: Omit<ICar, 'id'>, id?:string){
        this.id = id || createUUID();
        this.plate = props.plate;
        this.description = props.description;
        this.userId = props.userId;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJSON(): ICar {
        return{
            id: this.id,
            plate: this.plate,
            description: this.description,
            userId: this.userId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}