import styled from "styled-components";
import headerimg from '../../assets/headerimg.png'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    overflow-y: auto;

    > .content-page {
        position: relative;
        top: 9.5rem;
        > main {
            width: 100%;
            height: fit-content;  

            display: flex;
            flex-direction: column;

             .swiper{
                width: 100%;
                height: 100%;               
             }
             .swiper-wrapper, .swiper-slide{
                display: flex;
                flex-direction: row;
                gap: 1.33rem;
            }
            .swiper-slide, .swiper-slide-active, .swiper-slide-next{
                max-width: fit-content;
            }

            > header {
                width: 31.33rem;
                height: 10rem;
                display: flex;
                justify-content: flex-end;

                margin: 3.667rem auto;
                border-radius: 3px;

                background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

                position: relative;

                > .banner {
                    width: 15.9167rem;
                    height: 12.4167rem;
                    background: url(${headerimg}) no-repeat;
                    background-position: top;
                    background-size: cover;
                    opacity: 0.8;

                    position: absolute;
                    bottom: 0;
                    left: -2rem;
                }

                > .title-subtitle {
                    padding: 3rem 8px;
                    width: 18rem;

                    > h2, p {
                        color: ${({ theme }) => theme.COLORS.LIGHT_300};
                        font-family: Poppins;
                        font-style: normal;
                        line-height: 140%
                    }
                    > h2 {
                        font-size: 1.5rem;
                        font-weight: 600;
    
                    }
                    > p {
                        font-size: 1rem;
                        font-weight: 400;
                    }
                }
            }
        }  
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
    > .content-page{
        > main {
            margin: auto 2rem;
            > header {
                width: clamp(50rem, 70%, 80rem);
                height: fit-content;
                background: var(--Gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));
                display: flex;
                align-items: center;
                border-radius: 3px;
                position: relative;
                margin-top: 6rem;

                > .banner {
                    width: clamp(20rem, 50%, 45.14rem);
                    height: 20rem;
                    background-position: top;
                    background-size: cover;
                    position: absolute;
                    bottom: 0;
                    left: -10rem;
                    opacity: 0.8;
                }
                > .title-subtitle {
                    padding: 6.28rem 7.14rem;
                    width: fit-content;
                        > h2 {
                            font-family: Poppins;
                            font-size: 2.58rem;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 140%;
                        }
                        > p {
                            font-family: Roboto;
                            font-size: 1.14rem;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 100%;
                        }
                }
            }
        }
    }
        
    }
`