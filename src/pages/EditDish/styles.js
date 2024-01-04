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
           > .buttons {
                width: 100%;
                height: 4rem;
                display: flex;
                align-items: center;
                gap: 1rem;

                > button {
                    padding: 1rem 2.667rem;
                    height: 4rem;
                    width: 100%;
                }
                > button:first-child {
                    background: ${({ theme }) => theme.COLORS.DARK_800};
                }
        }
        }
    }
`


export const Image = styled.div`
    position: relative;

    width: 10rem;
    height: 10rem;
    align-self: center;
    display: flex;
    align-items: center;
    gap: 2rem;

    > img {
        border-radius: 50%;
        border: 2px solid  ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        width: 10rem;
        height: 10rem;
        
    }

    > label {
        width: 2rem;
        height: 2rem;
        background: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        right: 1rem;
        bottom: 0;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2.8rem;
            height: 2.8rem;          
            color: ${({ theme }) => theme.COLORS.DARK_100};
        }
    }
    > p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-family: Poppins;
            font-size: 1rem;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            text-align: center;
    }
`;