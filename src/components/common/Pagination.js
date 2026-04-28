import styled from "styled-components";

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
`;

export const PageButton = styled.button`
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: ${props => props.$active ? '#333' : '#fff'};
    color: ${props => props.$active ? '#fff' : '#333'};
    cursor: pointer;
    
    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
    
    &:hover:not(:disabled) {
        background: #f0f0f0;
    }
`;