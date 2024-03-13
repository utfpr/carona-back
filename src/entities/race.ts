import { IRace } from "../interfaces/IRaceInterface"
import { createUUID } from "../utils/createUUID"


export class race{
  id: IRace['id']
  originPoint: IRace['originPoint']
  endPoint: IRace['endPoint']
  timeStart: IRace['timeStart']
  userId: IRace['userId']
  carId: IRace['carId']
  createdAt: IRace['createdAt']
  updatedAt: IRace['updatedAt']

  constructor(props: Omit<IRace, 'id'>, id?:string){
    this.id =  id || createUUID();
    this.originPoint = props.originPoint;
    this.endPoint = props.endPoint;
    this.timeStart = props.timeStart;
    this.userId = props.userId;
    this.carId = props.carId;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date()
  }

  toJSON(): IRace{
    return {
        id: this.id,
        originPoint: this.originPoint,
        endPoint: this.endPoint,
        timeStart: this.timeStart,
        userId: this.userId,
        carId: this.carId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
  }
}