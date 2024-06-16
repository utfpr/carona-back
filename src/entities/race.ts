import { IRace } from "../interfaces/IRaceInterface"
import { createUUID } from "../utils/createUUID"


export class race{
  originPoint: IRace['originPoint']
  endPoint: IRace['endPoint']
  timeStart: IRace['timeStart']
  userId: IRace['userId']
  carId: IRace['carId']
  seats: IRace['seats']
  active: IRace['active']
  createdAt: IRace['createdAt']
  updatedAt: IRace['updatedAt']

  constructor(props: Omit<IRace, 'id'>, id?:number){
    this.originPoint = props.originPoint;
    this.endPoint = props.endPoint;
    this.timeStart = props.timeStart;
    this.userId = props.userId;
    this.carId = props.carId;
    this.seats = props.seats;
    this.active = true;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date()
  }

  toJSON(): IRace{
    return {
        originPoint: this.originPoint,
        endPoint: this.endPoint,
        timeStart: this.timeStart,
        seats: this.seats,
        userId: this.userId,
        carId: this.carId,
        active: this.active,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
  }
}