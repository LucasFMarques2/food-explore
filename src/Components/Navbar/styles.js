import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
    padding: 2rem;
    background-color: ${({theme})=> theme.COLORS.DARK_700};

    img{
      height: 3rem;
      align-self: center;
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