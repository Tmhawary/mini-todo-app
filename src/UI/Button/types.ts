import { MouseEventHandler, ReactNode } from "react"
export interface buttonTypes {
    buttonName?: string 
    action?: MouseEventHandler<HTMLButtonElement>
    variant: "outlined" | "contained"
    size: "small" | "medium" | "large"
    icon?:ReactNode
    
}