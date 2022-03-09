import React, { FunctionComponent } from 'react'
import IconButton from '@mui/material/Button'
import { buttonTypes } from './types'
export const StyledButton: FunctionComponent<buttonTypes> = ({
    action,
    buttonName,
    variant,
    size,
    icon,
    children
}) => {
    return (
        <IconButton
            onClick={action}
            variant={variant}
            size={size}
            component="span"
        >
            {icon}{ buttonName}
        </IconButton>
    )
}
