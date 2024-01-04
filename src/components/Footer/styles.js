import styled from "styled-components";

export const Container = styled.div`
    height: 6.416rem;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 2rem;

    > p {
        text-align: right;
        font-family: DM Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: ${({ theme }) => theme.COLORS.LIGHT_200}
    }

`