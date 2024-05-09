import { IUser } from "../interfaces/IUserInterface";
import { createUUID } from "../utils/createUUID";

export class User{
    id: IUser['id'];
    name: IUser['name']
    email: IUser['email']
    password: IUser['password']
    createdAt: IUser['createdAt']
    updatedAt: IUser['updatedAt']
    haveCar: IUser['haveCar']

    constructor(props: Omit<IUser, 'id'>, id?:string){
        this.id =  id || createUUID();
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
        this.haveCar =  props.haveCar || false
    }
    
    toJSON(): IUser{
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            haveCar: this.haveCar,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

}