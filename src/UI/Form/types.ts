import { ChangeEvent } from 'react'

export interface InputTypes {
    label: string
    id: string
    event: ChangeEvent<HTMLInputElement>
}