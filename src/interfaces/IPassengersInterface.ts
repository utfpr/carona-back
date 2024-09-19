export interface IPassenger{
    userId: number;
    raceId: number;
    active: boolean;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPassengerReturn{
    id: number 
    userId: number;
    raceId: number;
    active: boolean;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPassengerCreateRequest{
    userId: number;
    raceId: number;
}

export interface IPassengerDeleteRequest{
    id: number;
}