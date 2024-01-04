import styled from "styled-components";

export const Container = styled.button`
    background: none;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;

    > svg {
        font-size: 2rem;
    }
`;