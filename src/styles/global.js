import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    
    *{
        margin: 0%;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        -webkit-font-smoothing: antialiased;
        color: ${({theme}) => theme.COLORS.LIGHT_100}
    }

    body,input,button,textarea{
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100}
    };

    a{
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        text-decoration: center;
    }
    button, a {
    cursor: pointer;
    transition: .5s;
    }

    button:hover, a:hover {
    filter: brightness(0.9);
    transform: scale(.9);
    }
`