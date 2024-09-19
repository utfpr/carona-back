import { IRace, IRaceReturn } from "./IRaceInterface";

export interface IRaceRepository{
    findAll(): Promise<IRaceReturn[]>
    findOneRace(id:number): Promise<IRaceReturn>
    insert(props: IRace): Promise<IRaceReturn>
    update(props: IRace, id: number): Promise<IRaceReturn>
    delete(id: number): Promise<void> 
    historic(id: number): Promise<IRaceReturn[]>
    listActiveRaces(userId: number): Promise<IRaceReturn[]>
}