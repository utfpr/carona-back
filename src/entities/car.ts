import { ICar } from "../interfaces/ICarInterface"

export class Car{
    id: ICar['id']
    plate: ICar['plate']
    description: ICar['description']
    createdAt: ICar['createdAt']
    updatedAt: ICar['updatedAt']

    constructor(props: Omit<ICar, 'id'>, id?:string){
        this.id = 'q';
        this.plate = props.plate;
        this.description = props.description;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJSON(): ICar {
        return{
            id: this.id,
            plate: this.plate,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}