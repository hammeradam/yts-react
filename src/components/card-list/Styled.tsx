import styled from 'styled-components';

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    background: transparent;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.borderColor};
    font-size: 30px;
    color: ${({ theme }) => theme.textColor};
    border-radius: 0;
    padding: 10px;

    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: none;
        outline: none !important;
    }
`
