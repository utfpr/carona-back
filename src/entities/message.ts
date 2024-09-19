import { IMessage } from "../interfaces/IMessageInterface";

export class Message{
    author: IMessage['author']
    authorId: IMessage['authorId']
    chatId: IMessage['chatId']
    content: IMessage['content']
    createdAt: IMessage['createdAt']
    updatedAt: IMessage['updatedAt']

    constructor(props: Omit<IMessage, 'id'>, id?:string){
        this.author = props.author
        this.authorId = props.authorId
        this.chatId = props.chatId
        this.content = props.author
        this.createdAt = props.createdAt || new Date();
        this.updatedAt = new Date()
    }

    toJSON(): IMessage{
        return{
            author: this.author,
            authorId: this.authorId,
            chatId: this.chatId,
            content: this.content,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }
}