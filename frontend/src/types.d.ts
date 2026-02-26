export interface IMessageMutation {
    author: string,
    message: string,
    image: File | null
}

export interface IMessage {
    author: string,
    message: string,
    image: File | null,
    id: string
}