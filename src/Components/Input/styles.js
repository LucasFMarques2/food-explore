import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    width: 100%;

    #searchArea{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        border-radius: 8px;
        padding: .2rem;
    }

    #searchArea svg{
        margin: 0 1rem;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    label{
        align-self: start;
    }

    input{
        width: 100%;
        height: 4.8rem;


        border: none;
        border-radius: 8px;
        background-color: ${({theme}) => theme.COLORS.DARK_900};
       
        font-size: 1.3rem;

        caret-color: ${({theme}) => theme.COLORS.TOMATO_300};
    }

    input:focus{
        outline:none;
    }

    #searchArea{
        padding: 0 .9rem;
        margin-bottom: 1.9rem;
    }
`