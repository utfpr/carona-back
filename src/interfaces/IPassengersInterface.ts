export interface IPassenger{
    id: string;
    userId: string;
    raceId: string;
    active: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPassengerCreateRequest{
    userId: string;
    raceId: string;
}

export interface IPassengerDeleteRequest{
    id: string;
}