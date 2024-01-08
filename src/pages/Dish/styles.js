import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;

    > .content-page {
        position: relative;
        top: 9.5rem;

        display: flex;
        flex-direction: column;

        > main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
            flex-shrink: 0;

            margin: 3rem;

            > button {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-family: Poppins;
                font-size: 2rem;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;
                align-self: flex-start;

                background: none;
                border: none;
            }

            > img {
                width: 22rem;
                height: 22rem;
                border-radius: 50%;
            }

            > section {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;

                width: 26rem;

                > h2, p {
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    font-family: Poppins;
                    font-style: normal;
                    line-height: 140%;
                    text-align: center;
                }

                > h2 {
                    font-size: 2.25rem;
                    font-weight: 500;    
                }
                > p {
                    font-size: 1.33rem;
                    font-weight: 400;
                }
            }

            > .ingredients {
                display: flex;
                gap: 2rem;
                width: 26.33rem;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;

                margin-top: 8px;

                > span{
                    padding: 4px 8px;
                    background: ${({ theme }) => theme.COLORS.DARK_1000};
                    border-radius: 5px;

                    text-align: center;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    font-family: Poppins;
                    font-size: 1.167rem;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 2rem;
                }
            }
            > .buttons {
                width: 100%;
                margin-top: 2rem;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 16px;

                > button {
                    font-size: 2.25rem;
                }
                > p {
                    font-family: Roboto;
                    font-size: 1.833rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 160%;
                }

                > button:last-child {
                    font-size: 2.25rem;
                    width: 26.33rem;
                    height: 4rem;
                    > span {
                        text-align: center;
                        font-family: Poppins;
                        font-size: 1rem;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 1.352083rem;
                    }
                }
            }
        }
    }
`