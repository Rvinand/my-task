export interface ITodo {
    id: number
    title: string
    description: string
    isCompleted: boolean
    createdAt: number
    priority: string
}

export interface Option {
    label: string,
    value: string
}