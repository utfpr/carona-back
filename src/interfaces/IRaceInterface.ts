export interface IRace{
  originPoint: string 
  endPoint: string
  timeStart: Date
  userId:number
  carId: number
  seats: number
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface IRaceCreateRequest{
  originPoint: string 
  endPoint: string
  timeStart: Date
  userId:number
  carId: number
  seats: number
}

export interface IRaceGetRequest{
  id: number
}

export interface IRaceUpdateRequest{
  id: number
  originPoint?: string 
  endPoint?: string
  timeStart?: Date
  userId?:number
  carId?: number
  seats?: number
}

export interface IRaceDeleteRequest{
  id: number
}

export interface IHistoricRequest{
  id: number
}

export interface IListActiveRacesRequest{
  id: number
}