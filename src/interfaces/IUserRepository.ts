import { IUser } from "./IUserInterface"

export interface IUserRepository {
    findAll(): Promise<IUser[]>
    findOneUser(id:number): Promise<IUser>
    findByEmail(email:string): Promise<IUser>
    findByRa(ra: string): Promise<IUser>
    insert(props: IUser): Promise<IUser>
    update(props: IUser, id: number): Promise<IUser>
    delete(id: number): Promise<void> 
}