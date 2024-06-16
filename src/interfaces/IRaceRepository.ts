import { IRace, IRaceUpdateRequest } from "./IRaceInterface";

export interface IRaceRepository{
    findAll(): Promise<IRace[]>
    findOneRace(id:number): Promise<IRace>
    insert(props: IRace): Promise<IRace>
    update(props: IRace, id: number): Promise<IRace>
    delete(id: number): Promise<void> 
    historic(id: number): Promise<IRace[]>
    listActiveRaces(userId: number): Promise<IRace[]>
}