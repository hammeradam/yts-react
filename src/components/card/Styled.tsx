import styled from 'styled-components';

export const CardWrapper = styled.div`
    color: ${({ theme }) => theme.textColor};
    width: 15%;
    overflow: hidden;
    position: relative;

    --ggs: 0.8;

    @media (max-width: 1365px) {
        width: 20%;
    }

    @media (max-width: 1023px) {
        width: 30%;
    }

    @media (max-width: 575px) {
        width: 40%;
    }

    @media (max-width: 320px) {
        width: 80%;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;

    img {
        width: 100%;
        height: auto;
    }
`;

export const CardDetails = styled.div`
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
`;

export const CardTitle = styled.div`
    padding: 15px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

interface CardLinkWrapperProps {
    isOpen: boolean;
}

export const CardLinkWrapper = styled.div<CardLinkWrapperProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.backgroundColor};
    transition: 0.2s ease;
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? '' : 'translateY(110%)')};

    a,
    i {
        color: ${({ theme }) => theme.textColor};
        text-decoration: none;
        transition: 0.3s ease;
    }
`;

export const CardLink = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    &:hover {
        a,
        i {
            color: ${({ theme }) => theme.primary};
        }
    }
`;

export const LinkWrapperClose = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;

    &:hover {
        i {
            color: ${({ theme }) => theme.primary};
        }
    }
`;

export const CardActionsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 0;
    border-top: 1px solid ${({ theme }) => theme.borderColor};

    i {
        cursor: pointer;
        transition: 0.2s ease;

        &:hover {
            color: ${({ theme }) => theme.primary};
        }
    }
`;

export const ActionDivider = styled.div`
    width: 1px;
    height: 14px;
    background: ${({ theme }) => theme.borderColor};
`;
