import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    > svg {
        width: 2.05rem;
        height: 2.05rem;
        fill: ${({ theme, $isheader }) => $isheader ? theme.COLORS.TINTS_CAKE_100 : theme.COLORS.LIGHT_700};
    }
    > h2 {
        font-family: Roboto;
        font-size: 1.76rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }
    > h3{
        font-family: Roboto;
        font-size: 1.2718rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        color: ${({ theme }) => theme.COLORS.LIGHT_700}
    }
`