export interface IChat{
    raceId: number
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IChatReturn{
    raceId: number;
    createdAt: Date;
    updatedAt: Date
}

export interface IChatCreateRequest{
    raceId: number;
}

export interface IChatUpdateRequest{
    id: number
    name: string
}

export interface IChatGetRequest{
    id: number
}
