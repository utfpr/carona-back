export interface IConfirmEmailRepository{
    create(email: string, code: number): Promise<void>
    compare(email:string, code: number): Promise<boolean>
    delete(email: string): Promise<void>
}