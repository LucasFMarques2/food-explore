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
    width: 80%;
    text-align: center;
    h1{
      display: none;
    }

    button{
        margin-bottom: 3.2rem;
    }

    #searchArea{
        padding: 0 .9rem;
        margin-bottom: 1.9rem;
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

        background: ${({ theme }) => theme.COLORS.DARK_800};
    }
`