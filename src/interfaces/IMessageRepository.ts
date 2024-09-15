import { IMessage, IMessageCreateRequest } from "./IMessageInterface";

export interface IMesageRepository{
    create(props: IMessageCreateRequest): Promise<IMessage>
    get(id: number): Promise<IMessage>
    getByChat(chatId: number): Promise<IMessage[]>
    getByAuthor(authorId: number): Promise<IMessage[]>
}