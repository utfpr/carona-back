export interface IMessage{
    chatId: number
    authorId: number;
    author: string
    content: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IMessageCreateRequest{
    chatId: number
    authorId: number;
    content: string
}

export interface IMessageGetRequest{
    id: number;
}

export interface IMessageGetByChatRequest{
    chatId: number
}

export interface IMessageGetByAuthorRequest{
    authorId:number
}