import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
        margin: 5.167rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            width: 427px;
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            width: 980px;
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.XL}){
            width: 1280px;
        }
        > h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;

            margin-bottom: 2rem;
        }

`