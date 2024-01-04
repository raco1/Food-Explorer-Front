import styled from "styled-components";
import ArrowDown from '../../assets/ArrowDown.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;

    > main {
        position: relative;
        top: 9.5rem;

        display: flex;
        flex-direction: column;

        > button {
            margin: 0.833rem 2.667rem;
            width: fit-content;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 1.33rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;

            background: none;
            border: none;
        }

        > form { 
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin: 0.833rem 2.667rem 4.5rem;

            > label > div {    
                margin-top: 1.333rem;
            }

           > label:nth-child(2) {
                position: relative;

                input[type="file"] {
                    display: none;
                }

                span {
                    position: absolute;
                    top: 4rem;
                    right: 4rem;
                }
           }

           > h3, label {
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                font-family: Roboto;
                font-size: 1.333rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
           }
           > label > #category {
                width: 100%;
                height: 4rem;
                padding: 1rem;
                display: flex;

                align-items: center;
                gap: 1.167rem;
                align-self: stretch;

                border-radius: 5px;
                appearance: none;
                background: url(${ArrowDown}) no-repeat right 1rem top 1rem;
                background-color: ${({ theme }) => theme.COLORS.DARK_900};
                color: ${({ theme }) => theme.COLORS.LIGHT_400};

                font-family: Roboto;
                font-size: 1.167rem;
                line-height: 160%;
           }

           > section {
                display: flex;
                gap: 1rem;
                padding: 4px 8px;
                height: fit-content;
                flex-wrap: wrap;
                justify-content: space-evenly;

                background: ${({ theme }) => theme.COLORS.DARK_800};
           }
           > button:last-child {
                width: 100%;
                height: 4rem;
                padding: 1rem 2.667rem;
        }
        }
    }
`