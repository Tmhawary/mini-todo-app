import Container from '@mui/material/Container';
import styled from 'styled-components';
import {colors} from '../Colors/colors'
export const StyledCard = styled(Container)`
    border-radius:16px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    width:10rem;
    min-height:20rem ;
    height:fit-content;
    background-color:${colors.foundation.white} ;
    `;
