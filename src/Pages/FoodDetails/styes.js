import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;

    a{
        display: flex;
        align-items: center;
        margin: 1rem;
    }
    a:hover{
        transform: scale(1);
    }
`

export const Food = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 20rem;
        margin-bottom: 1rem;
    }
`

export const Datails = styled.section`
    text-align: center;
    padding: 0 2.5rem;
    h2{
        font-weight: 400;
    }
    p{
      font-size: 1.5rem;
      word-spacing: -.1rem;
      text-align: justify;
      margin-bottom: 1rem;
    }

   
  #tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.9rem; 
      justify-content: start;
      padding: 1rem;
  }
`

export const Order = styled.div`
    margin-top: 1rem;
    width: 70%;
    display: flex;
    align-items: center;

    .buttonNumber{
        border: none;
        background: transparent;
        transform: scale(1);
    }
    
    button{
        font-size: 1.5rem;
        padding:  1rem;
        transition: .2s;
    }

    span{
        font-size: 1.8rem;
        
        margin-bottom: .5rem;
    }
`