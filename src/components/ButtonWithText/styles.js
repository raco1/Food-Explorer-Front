import styled from "styled-components";

export const Container = styled.button`
    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    width: 13.5rem;
    height: 2.67rem;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border-radius: 5px;

    > p {
        text-align: center;
        font-family: Poppins;
        font-size: 1.167rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2rem;
    }

    > svg {
        font-size: 2rem;
    }
`;