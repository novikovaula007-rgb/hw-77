export interface IMessageMutation {
    author: string,
    message: string,
    image: File | null
}

export interface IMessage {
    author: string,
    message: string,
    image: string | null,
    id: string
}