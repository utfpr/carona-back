import { IUser, IUserReturn } from "./IUserInterface"

export interface IUserRepository {
    findAll(): Promise<IUserReturn[]>
    findOneUser(id:number): Promise<IUserReturn>
    findByEmail(email:string): Promise<IUserReturn>
    findByRa(ra: string): Promise<IUserReturn>
    insert(props: IUser): Promise<IUserReturn>
    update(props: IUser, id: number): Promise<IUserReturn>
    delete(id: number): Promise<void> 
}