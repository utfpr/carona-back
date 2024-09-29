import { IChat, IChatReturn } from "./IChatInterface";

export interface IChatRepository{
    findAll(): Promise<IChat[]>
    create(props: IChat): Promise<IChat>
    update(id: number, name: string): Promise<IChat>
    get(id: number): Promise<IChat>
}