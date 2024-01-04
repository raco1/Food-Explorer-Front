import styled from "styled-components";

export const Container = styled.textarea`

    width: 100%;
    height: 14.33rem;

    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border:none;
    resize: none;

    border-radius: 8px;
    margin-top: 1.33rem;
    padding: 1.167rem;

    font-family: Roboto;
    font-size: 1.33rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;

    &:placeholder{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    };
`;