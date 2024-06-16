import { ICar } from "./ICarInterface";

export interface ICarRepository{
    findAll(userId: string): Promise<ICar[]>
    findOneCar(id:string): Promise<ICar>
    insert(props: ICar): Promise<ICar>
    update(props:ICar, id:string): Promise<ICar>
    delete(id:string): Promise<void>
    findUserCars(userId: string): Promise<ICar[]>
    findMainCar(userId: string): Promise<ICar>
}