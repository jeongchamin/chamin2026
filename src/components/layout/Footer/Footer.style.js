import styled from "styled-components";
import { Container } from '../../common/Container';

//footer wrap
export const FooterWrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};

  &::before{
    content: '';
    width: calc(50% - 80px);
    height: 1px;
    position: absolute;
    top: 56px;
    left: 0;
    border-top: 2px solid ${props => props.theme.colors.primaryBorder};
  }
  &::after{
    content: '';
    width: calc(50% - 80px);
    height: 1px;
    position: absolute;
    top: 56px;
    right: 0;
    border-top: 2px solid ${props => props.theme.colors.primaryBorder};
  }
`;

export const FooterInner = styled(Container)`
    padding: 16px 0 40px;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .brand-name{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.text};
    flex-shrink: 0;
    color: ${props => props.theme.colors.contentsBg};
    font-size:1rem;
    font-weight:600;
  }
`;

export const Copyright = styled.p`
  padding-top: 8px;
  font-size:0.8125rem;
  color: ${props => props.theme.colors.muted};
  font-weight: 300;
`;

