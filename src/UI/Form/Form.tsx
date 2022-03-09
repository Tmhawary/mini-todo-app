import React, { FunctionComponent , useState} from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import {InputTypes} from './types'
export const StyledInput:FunctionComponent<InputTypes> = ({
    label,
    id,
    event
}
) => {
    const [input,setInput] =useState('What do you need to do')
    const HandleChange = () => {
        setInput(event.target.value)
    }
    return (
        <Box
            sx={{
                width: 300,
                maxWidth: '100%',
            }}
        >
            <TextField
                fullWidth
                label={label}
                id={id}
                value={input}
                onChange={ HandleChange}
            />
        </Box>
    )
}
