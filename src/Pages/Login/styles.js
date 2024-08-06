import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 27.8rem;
        height: 4.4rem;
        margin-bottom: 7.2rem;
    }

    @media(min-width: 905px){
        flex-direction: row;
        justify-content: space-around;
         img{
            width: 34.8rem;
            height: 4.8rem;
         }
   }
`

export const Form = styled.form`
    h1{
        display: none;
    }
    width: 80%;
    text-align: center;
    button{
        margin-bottom: 3.2rem;
    }

    @media(min-width: 905px){
        h1{
        display: block;
        font-weight: 400;
        margin-bottom: 3.2rem;
       }
        border-radius: 20px;
        padding: 6.4rem;
        width: 50rem;

        background: ${({theme})=> theme.COLORS.DARK_800};
    }
`