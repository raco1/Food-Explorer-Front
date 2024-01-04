import styled from "styled-components";

export const Container = styled.div`

    flex: 0.5;
    background: ${({ theme }) => theme.COLORS.DARK_900};

    display: flex;
    align-items: center;
    gap: 1.167rem;
    padding: 1rem 1.167rem;
    border-radius: 5px;

    > input {
        width: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        background: none;

        font-family: Roboto;
        font-size: 1.33rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }
    > svg {
        font-size: 2rem;
        fill: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`