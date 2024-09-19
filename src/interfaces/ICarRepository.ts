import { ICar, ICarReturn } from "./ICarInterface";

export interface ICarRepository{
    findAll(userId: number): Promise<ICarReturn[]>
    findOneCar(id:number): Promise<ICarReturn>
    insert(props: ICar): Promise<ICarReturn>
    update(props:ICar, id:number): Promise<ICarReturn>
    delete(id:number): Promise<void>
    findUserCars(userId: number): Promise<ICarReturn[]>
    findMainCar(userId: number): Promise<ICarReturn>
}