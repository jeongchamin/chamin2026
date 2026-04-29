import styled from "styled-components";
import { Container } from "../../common/Container";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button";

//Header
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  //스크롤 되었을 때
  ${(props) =>
    props.$isScrolled &&
    `
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  `}
`;

export const HeaderInner = styled(Container)`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

//Logo
export const Logo = styled(Link)`
  position: relative;
  width: 120px;
  height: 54px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  font-weight:800;
  font-size: 1.7rem;
  em{
    position: absolute;
    font-style: normal;
    font-size:1rem;
    right: 6px;
    top: 8px;
  }
`;

//util
export const HeaderUtil = styled.div`
  display: flex;
  gap: 8px;
`;

export const ModeButton = styled(Button)`
  width: 130px;
  overflow: hidden;

  ${({ theme }) => theme.media.mobile} {
      width: 56px;
      padding: 0 8px;
  }
`;

// 다트모드 텍스트
export const TextMask = styled.div`
  height: 24px; 
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const SlidingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  transform: ${props => props.$isDarkMode ? 'translateY(-24px)' : 'translateY(0)'};

  .unit {
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    ${({ theme }) => theme.media.mobile} {
          width: 40px;
    }
  }

  span{
    ${({ theme }) => theme.media.mobile} {
          display: none;
    }
  }

`;