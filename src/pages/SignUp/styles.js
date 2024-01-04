import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    padding: 4.5rem 4rem 0rem 5.4167rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 4.5rem 4rem 4.5rem 5.4167rem;
    }

    display: flex;
    flex-direction: column;

    > div:first-child {
        margin-bottom: 6rem;
        > svg {
            width: 3.6rem;
            height: 3.6rem;
        }
        > h2 {
            font-size: 3rem;
        }
    }   
   
`
export const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 2.67rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            background: ${({ theme }) => theme.COLORS.DARK_700};
            width: 34rem;
            padding: 3rem;
        }
        
        > label {
            font-family: Roboto;
            font-size: 1.33rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;

            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        > button {
            height: auto;
            width: 100%;
        }
        > a {
        color:${({ theme }) => theme.COLORS.LIGHT_100};
        text-align: center;
        font-family: Poppins;
        font-size: 1.167rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem;

        margin-top: 1.5rem;
    }
`