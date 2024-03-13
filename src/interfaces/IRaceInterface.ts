export interface IRace{
  id: string 
  originPoint: string 
  endPoint: string
  timeStart: string
  userId:string
  carId: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IRaceCreateRequest{
  originPoint: string 
  endPoint: string
  timeStart: string
  userId:string
  carId: string
}

export interface IRaceGetRequest{
  id: string
}

export interface IRaceUpdateRequest{
  id: string 
  originPoint: string 
  endPoint: string
  timeStart: string
  userId:string
  carId: string
}

export interface IRaceDeleteRequest{
  id: string
}