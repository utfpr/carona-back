import { IUser } from "../interfaces/IUserInterface";

export class User{
    name: IUser['name']
    ra: IUser['ra']
    email: IUser['email']
    password: IUser['password']
    createdAt: IUser['createdAt']
    active: IUser['active']
    updatedAt: IUser['updatedAt']
    haveCar: IUser['haveCar']

    constructor(props: Omit<IUser, 'id'>, id?:string){
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.ra = props.ra;
        this.active = true
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date();
        this.haveCar =  props.haveCar || false
    }
    
    toJSON(): IUser{
        return {
            name: this.name,
            email: this.email,
            password: this.password,
            haveCar: this.haveCar,
            ra: this.ra,
            active: this.active,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

}