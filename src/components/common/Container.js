import styled from "styled-components";

export const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;

    /* 태블릿 1024 */
    ${({ theme }) => theme.media.tablet} {
        max-width: none;
        padding: 0 24px;
    }

    /* 모바일 768 */
    ${({ theme }) => theme.media.mobile} {
        max-width: none;
        padding: 0 20px;
    }
`;