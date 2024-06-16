import { IRace } from "./IRaceInterface";

export interface IRaceRepository{
    findAll(): Promise<IRace[]>
    findOneRace(id:string): Promise<IRace>
    insert(props: IRace): Promise<IRace>
    update(props: IRace, id: string): Promise<IRace>
    delete(id: string): Promise<void> 
    historic(id: string): Promise<IRace[]>
    listActiveRaces(userId: string): Promise<IRace[]>
}