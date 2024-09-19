export interface ICar{
    plate: string
    description: string
    userId: number
    mainCar: boolean
    active: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface ICarReturn{
    id: number
    plate: string
    description: string
    userId: number
    mainCar: boolean
    active: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface ICarCreateRequest{
    plate: string
    description: string
    userId: number 
}

export interface ICarGetRequest{
    id: number
}

export interface ICarsGetRequest{
    userId: number
}

export interface ICarUpdateRequest{
    id: number
    plate: string
    description: string
    mainCar: boolean
    createdAt?: Date
    updatedAt?: Date
}

export interface ICarDeleteRequest{
    id:number
}