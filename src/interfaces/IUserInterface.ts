export interface IUser{
    name: string
    email: string
    password: string
    haveCar: boolean
    ra: string
    active: boolean
    createdAt?: Date
    updatedAt?: Date
    confirmEmail?: string,
    confirmPassword?: string
}

export interface IUserCreateRequest{
    name: string
    email: string
    password: string
    ra: string
    confirmEmail?: string
    confirmPassword?: string
}

export interface IUserGetRequest{
    id: number
}

export interface IUserUpdateRequest{
    id:number
    name: string
    email: string
    password: string
    ra: string
    actualPassword?: string
    confirmEmail?: string
    confirmPassword?: string
}

export interface IUserDeleteRequest{
    id:number
}

export interface IUserAuthenticateRequest {
    email    : string;
    password : string;
}

export interface IUserAuthenticateByRaRequest{
    ra: string
    password: string
}
