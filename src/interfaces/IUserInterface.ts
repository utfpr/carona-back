export interface IUser{
    id: string
    name: string
    email: string
    password: string
    haveCar: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserCreateRequest{
    name: string
    email: string
    password: string
}

export interface IUserGetRequest{
    id: string
}

export interface IUserUpdateRequest{
    id:string
    name: string
    email: string
    password: string
}

export interface IUserDeleteRequest{
    id:string
}

export interface IUserAuthenticateRequest {
    email    : string;
    password : string;
}
