import styled, { css } from "styled-components";

const variants = {
    primary: css`
        background-color: ${props => props.theme.colors.primaryBtn};
        border: 1px solid ${props => props.theme.colors.primaryBtnBorder};
        color: ${props => props.theme.colors.primaryBtnText};
    `,
    secondary: css`
        background-color: ${props => props.theme.colors.secondary};
        color: #dddddd;
    `,
    outline: css`
        background-color: transparent;
        border: 1px solid #ddd;
        color: #333;
    `,
    ghost: css`
        background: transparent;
        border: none;
        color: #333;
    &:hover{
        color: ${props => props.theme.colors.accent};
        opacity: 1;
    }
    `,
    gradient: css`
        background: ${props => props.theme.colors.gradientBtn};
        border: 1px solid ${props => props.theme.colors.gradientBtnBorder};
        color: #ffffff;
        box-shadow: ${props => props.theme.colors.gradientBtnEffects};
    `
};

const sizes = {
  sm: css` padding: 8px 20px; font-size: 0.8125rem; border-radius: 28px;`,
  md: css` padding: 12px 24px; font-size: 1rem; border-radius: 23px;`,
  lg: css` padding: 16px 32px; font-size: 18px; width: 100%; `,
  icon : css`padding: 0px 20px; font-size: 14px; border-radius: 23px;`
};

export const Button = styled.button`

    //버튼 기본값
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 23px; */
    cursor: pointer;
    transition: all 0.35s ease-in-out;
    box-sizing: border-box;
    gap: 8px;
    
    ${props => variants[props.variant || 'primary']}
    ${props => sizes[props.size || 'md']}
    
    &:hover{
        opacity: 0.7;
    }
`;