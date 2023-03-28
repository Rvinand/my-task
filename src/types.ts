export interface IUser {
    id: number
    name: string
    email: string
    avatar: string
    isBan: string
    banDate: string
    banReason: string
    isActivated: string
    roles: IRole[]
}

export interface IRole{
    id: number
    name: string
    description: string
}

export interface ITodo {
    id: number
    title: string
    description: string
    isCompleted: boolean
    createdAt: number
    priority: string
}

export interface IUser {
    id: number
    name: string
}

export interface Option {
    label: string,
    value: string
}