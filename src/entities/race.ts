import { IRace } from "../interfaces/IRaceInterface"


export class race{
  id: IRace['id']
  originPoint: IRace['originPoint']
  endPoint: IRace['endPoint']
  timeStart: IRace['timeStart']
  createdAt: IRace['createdAt']
  updatedAt: IRace['updatedAt']

  constructor(props: Omit<IRace, 'id'>, id?:string){
    this.id = 'a';
    this.originPoint = props.originPoint;
    this.endPoint = props.endPoint;
    this.timeStart = props.timeStart;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = new Date()
  }

  toJSON(): IRace{
    return {
        id: this.id,
        originPoint: this.originPoint,
        endPoint: this.endPoint,
        timeStart: this.timeStart,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt
    }
  }
}