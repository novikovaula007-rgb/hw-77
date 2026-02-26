export interface IMessageMutation {
    author: string,
    message: string,
    image: string | null
}

export interface IMessage {
    author: string,
    message: string,
    image: string | null,
    id: string
}