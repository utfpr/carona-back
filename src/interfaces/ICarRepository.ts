import { ICar } from "./ICarInterface";

export interface ICarRepository{
    findAll(userId: number): Promise<ICar[]>
    findOneCar(id:number): Promise<ICar>
    insert(props: ICar): Promise<ICar>
    update(props:ICar, id:number): Promise<ICar>
    delete(id:number): Promise<void>
    findUserCars(userId: number): Promise<ICar[]>
    findMainCar(userId: number): Promise<ICar>
}