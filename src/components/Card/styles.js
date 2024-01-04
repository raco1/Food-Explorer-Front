import styled from "styled-components";

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
                        
        min-width: 17.5rem;
        height: 24.33rem;
        padding: 2rem;

        border-radius: 8px;
        border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
        background: ${({ theme }) => theme.COLORS.DARK_300};

        position: relative;

        .title {
            background: none;
            border: none;
            > h3 {      
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: 1.167rem;                
                text-align: center;
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                line-height: 2rem;
            }
        }

        > button:first-child {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            width: 2rem;
            height: 2rem;
            
            > svg {
                width: 2rem;
                height: 2rem;
                fill: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
        > figure > img {
            width: 7.33rem;
            height: 7.33rem;
            border-radius: 50%;
        }

        > span {
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
            text-align: center;
            font-family: Roboto;
            font-size: 1.33rem;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
        }
        > .handle-amount-included{
            display: flex;
            flex-direction: column;
            gap: 1.167rem;

                > .buttons {
                display: flex;
                width: 100%;
                height: 2.67rem;
                padding: 4px 0rem;
                justify-content: center;
                align-items: center;
                gap: 1.167rem;
                            
                    > button {
                        font-size: 2rem;
                    }
                    > p {
                        font-family: Roboto;
                        font-size: 1.33rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 100%;
                    }   
                }
        }                 
            
`