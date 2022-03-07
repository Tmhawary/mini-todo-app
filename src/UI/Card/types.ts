import { MouseEventHandler } from 'react'


export interface CardWidget {
    title: string 
    description: string 
    image?: string 
    Click?: MouseEventHandler<HTMLDivElement>
}