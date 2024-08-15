import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
   
    padding: 2rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    
    .hidden-on-small {
      display: flex;
      align-items: center;
      width: 100vw;
      display: none;
  }


    img{
      height: 3rem;
      align-self: center;
    }

    p{
      display: flex;
      position: relative;
 
    }

    p svg{
      width: 2.5rem;
      height: 2.5rem;
    }

    p span{
      box-sizing: content-box;
      font-size: 1.3rem;
      font-weight: 500;
      border-radius: 50%;
      padding: .1rem;
      width: 1.8rem;
      height: 1.8rem;
      text-align: center;

      line-height: 1.6;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      position: absolute;
      top: -7px;
      right: -7px;
    }
    
    .menu-burguer {
        width: 2.5rem;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .menu-line {
      height: .4rem;
      background-color: #fff;
      border-radius: 3px;
      transition: all 250ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
    }

    .menu-line:first-child {
      animation: firstLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
    }

    .open .menu-line:first-child {
      animation: firstLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
      animation-fill-mode: forwards;
    }

    .desktop{
      display: none;
    }


    @media(min-width: 950px){
      padding: 2rem 5% ;

      .hidden-on-small{
        display: flex;
      }

      .menu-burguer{
        display: none;
      }
      img{
        margin-right: 10%;
      }
      p{
        display: none;
      }

      button{
        width: 20rem;
        margin-left: 5%;
        padding: 10px;
      }

      button h4{
        font-weight: 400;
      }
      
      span{
        font-size: 1.4rem;
      }
      input{
        align-self: center;
      }

      a svg{
        display: flex;
        margin-left: 1rem;
      }
    }

  @keyframes firstLinetoOpen {
  0%   {
    transform: translateY(0);
  }

  50% { 
    transform: translateY(8px);
  }

  100% {
    transform: translateY(8px) rotate(45deg);
  }
}

@keyframes firstLinetoClose {
  0%   {
    transform: translateY(17px) rotate(0);
  }

  100% {
    transform: translateY(0);
  }
}

.open .menu-line:nth-child(2){
  opacity: 0;
}

.menu-line:last-child {
  animation: lastLinetoClose 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);  
}

.open .menu-line:last-child {
  animation: lastLinetoOpen 240ms cubic-bezier(0.23, 0.95, 0.58, 1.37);
  animation-fill-mode: forwards;
}

@keyframes lastLinetoOpen {
  0%   {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(-8px) rotate(-45deg);
  }
}

@keyframes lastLinetoClose {
  0%   {
    transform: translateY(-17px);
  }

  100% {
    transform: translateY(0);
  }

}
`