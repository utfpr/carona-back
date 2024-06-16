export interface IRace{
  id: string 
  originPoint: string 
  endPoint: string
  timeStart: Date
  userId:string
  carId: string
  seats: number
  active: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface IRaceCreateRequest{
  originPoint: string 
  endPoint: string
  timeStart: Date
  userId:string
  carId: string
  seats: number
}

export interface IRaceGetRequest{
  id: string
}

export interface IRaceUpdateRequest{
  id: string 
  originPoint?: string 
  endPoint?: string
  timeStart?: Date
  userId?:string
  carId?: string
  seats?: number
}

export interface IRaceDeleteRequest{
  id: string
}

export interface IHistoricRequest{
  id: string
}

export interface IListActiveRacesRequest{
  id: string
}