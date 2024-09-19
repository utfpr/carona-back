import { IChat } from "../interfaces/IChatInterface"

export class Chat{
    raceId: IChat['raceId']
    name: IChat['name']
    createdAt: IChat['createdAt']
    updatedAt: IChat['updatedAt']

    constructor(props: Omit<IChat, 'id'>, id?:string){
        this.raceId = props.raceId
        this.name = props.name
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJSON(): IChat {
        return{
            raceId: this.raceId,
            name: this.name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}