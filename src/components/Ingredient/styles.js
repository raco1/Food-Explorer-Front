import styled from "styled-components";

export const Container = styled.div`

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
`