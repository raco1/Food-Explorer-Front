import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakPoints'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --swiper-theme-color: #FFFFFF;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 12px;
        --swiper-navigation-size: 12px;
        .swiper-button-prev, .swiper-button-next{
            display: none;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        font-size: 14px;
        --swiper-navigation-size: 28px;
    }
}
body{
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    -webkit-font-smoothing: antialiased;

    font-family: 'Poppins', sans-serif;
}
body, button, input, textarea{
    font-size: 1rem;
    border: none;
    outline: none;
}
button, a{
    cursor: pointer;
};
a{
    text-decoration: none;
};

`