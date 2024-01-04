import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_300 : theme.COLORS.LIGHT_100};
    border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;
    padding: 0.833rem 1.33rem;

    > button {
        border: none;
        background: none;
        color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        font-size: 1rem;
    };  
    > input {
        width: 6rem;

        background: transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;

        font-family: Roboto;
        font-size: 1.33rem;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    };
    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};;
        font-size: 1.33rem;
        font-weight: 400;
    };
`