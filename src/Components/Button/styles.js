import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.2rem 0;
    background: ${({theme}) => theme.COLORS.TOMATO_200};
    
    border: none;
    border-radius: 7px;
    
    font-size: 1.5rem;
    svg{
        margin-right: .5rem;
    }
    h4{
        margin-right: .5rem;
        font-weight: 400;
    }
`;
