import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    width: 100%;

    label{
        align-self: start;
    }
    input{
        width: 100%;
        height: 4.8rem;
        padding: 1.6rem;
        
        border: none;
        border-radius: 8px;
        
        margin-top: .8rem;
        margin-bottom: 3.2rem;

        background-color: ${({theme}) => theme.COLORS.DARK_900};
        font-size: 1.3rem;

        caret-color: ${({theme}) => theme.COLORS.TOMATO_300};
    }

    input:focus{
        outline:none;
    }
`