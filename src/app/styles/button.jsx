import styled, { css } from 'styled-components';
import variables from './variables';
import { Breakpoint } from './breakpoints';

export const Button = styled.button`
    border-radius: 4px;
    border: 0;
    padding: 1rem 2rem;
    background: transparent;
    border: 2px solid ${variables.color.primary}
    color: ${variables.color.primary};
    font-size: 0.8rem;
    font-weight: ${variables.fontWeight.bold};

    :hover{
        opacity: .7;
        cursor: pointer;
    }   

    ${Breakpoint.tablet`font-size: 0.9rem`};
    

    ${props => props.primary && css`
        background-color: ${variables.color.primary};
        color: white;
    `}
`;

