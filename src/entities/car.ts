import { ICar } from "../interfaces/ICarInterface"
import { createUUID } from "../utils/createUUID"

export class Car{
    id: ICar['id']
    plate: ICar['plate']
    description: ICar['description']
    userId: ICar['userId']
    mainCar: ICar['mainCar']
    createdAt: ICar['createdAt']
    updatedAt: ICar['updatedAt']
    active: ICar['active']

    constructor(props: Omit<ICar, 'id'>, id?:string){
        this.id = id || createUUID();
        this.plate = props.plate;
        this.description = props.description;
        this.userId = props.userId;
        this.mainCar = props.mainCar || false
        this.active = true
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJSON(): ICar {
        return{
            id: this.id,
            plate: this.plate,
            description: this.description,
            userId: this.userId,
            mainCar: this.mainCar,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}