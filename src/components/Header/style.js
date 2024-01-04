import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    height: 9.5rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    position: fixed;
    z-index: 2;
    > nav {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      padding: 4.67rem 2.33rem 2rem;

      > .logout {
        display: none;
      }
      > .NovoPrato-Pedidos {
        display: none;
      }
      > :nth-child(3){
        display: none;
      }
      > .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        > span {
          color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 160%;
        }
      }

      @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
          .menu-logo {
            display: none;
          }
          > .logout {
          display: block;
          }
          > .NovoPrato-Pedidos {
            display: flex;
          }
          > :nth-child(3){
            display: flex;
            width: 50%;
          }
          > .pedidos-icon{
            display: none;
          }
      }  
    }
`

export const Menu = styled.div`
    height: 100%;
    width: 425px;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: ${({ theme }) => theme.COLORS.DARK_100};

    animation: showSidebar 400ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    > header {
      background: ${({ theme }) => theme.COLORS.DARK_700};
      height: 9.5rem;

      > nav {
        padding: 4.67rem 2.33rem 2rem;
        display: flex;
        align-items: center;
        gap: 1.33rem;

        > :nth-child(3){
          flex: 1;
        }

        > h1 {
          font-family: Roboto;
          font-size: 1.7635rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        > button {
          border: none;
          background: none;
          font-size: 1.5rem;
          display: flex;

          > svg {
            width: 2.05rem;
            height: 2.05rem;
            fill: ${({ theme }) => theme.COLORS.LIGHT_100};
          }
        }
    }
      
  }
    > main {
        flex: 1;
        display: flex;
        flex-direction: column;

        height: 100%;
        margin: 3rem 2.33rem 0rem;

        > button {
          margin-top: 3rem;
          padding: 10px;

          background: none;
          border: none;

          text-align: left;

          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-family: Poppins;
          font-size: 2rem;
          font-style: normal;
          font-weight: 300;
          line-height: 140%;

          border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
        }
    }

    @keyframes showSidebar {
      0% {
        transform: scaleY(0);
        transform-origin: 0% 100%;
        opacity: 0;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 0% 100%;
        opacity: 1;
      }
}
@media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    display: none;
  };
`