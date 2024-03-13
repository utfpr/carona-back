export interface ICar{
    id: string
    plate: string
    description: string
    userId: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ICarCreateRequest{
    plate: string
    description: string
    userId: string
}

export interface ICarGetRequest{
    id: string
}

export interface ICarsGetRequest{
    userId: string
}

export interface ICarUpdateRequest{
    id: string
    plate: string
    description: string
    userId: string
    createdAt?: Date
    updatedAt?: Date
}

export interface ICarDeleteRequest{
    id:string
}

