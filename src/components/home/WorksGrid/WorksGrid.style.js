import styled from "styled-components";
import { motion } from "framer-motion";
import Masonry from 'react-masonry-css'

export const LikedWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
export const LikedCnt = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  margin-right: 20px;

  .liked-cnt{
    position: absolute;
    display: block;
    background: ${props => props.theme.colors.accent};
    padding: 1px 10px;
    border-radius: 10px;
    top: -6px;
    left: 14px;
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 500;
    z-index: -1;
  }
`;

/* 모바일 — 메이슨리 */
export const MasonryWrap = styled(Masonry)`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-bottom: 60px;
`

/* 메이슨리 카드 */
export const MasonryCard = styled.div`
  position: relative;
  height: ${({ $height }) => $height};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  margin-bottom: 12px;
  cursor: ${({ $hasLink }) => $hasLink ? 'pointer' : 'default'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;

    /* height: auto;       mobileHeight 값없애고 이미지 비율 그대로 넣으면 더예쁘지
    display: block; */
  }
  &:hover img {
    transform: scale(1.05);
  }

  &:hover > div:first-of-type {
    opacity: 1;
  }
`

 /* 데스크탑 — 벤토그리드*/
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 310px 250px 70px 190px 310px;
  gap: 20px;
  margin-bottom: 100px;
`;

export const WorkCard = styled(motion.div)`
  grid-column: ${props => props.$colSpan}; 
  grid-row: ${props => props.$rowSpan};

  height: 100%;
  align-self: stretch;
  background: ${props => props.theme.colors.contentsBg};
  border-radius: ${props => props.theme.radius};
  overflow: hidden;
  position: relative;
  cursor: ${({ $hasLink }) => $hasLink ? 'pointer' : 'default'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  &:hover img {
    transform: scale(1.05);
  }
  &:hover > div:first-of-type {
    opacity: 1;
  }
`;


export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;

  ${({theme}) => theme.media.mobile} {
    align-items: baseline;
    justify-content: flex-end;
    padding: 16px;
    gap: 5px;
  }
`

export const WorkTitle = styled.span`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 400;
`

export const VisitButton = styled.a`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  gap: 6px;
  padding: 0px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #3A3838;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`
export const LikeButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  background: ${({ $isLiked, $isDarkMode }) => {
    if ($isLiked) return $isDarkMode
      ? 'rgba(11, 18, 43, 0.6)'   /* 다크 활성 — 청록 */
      : 'rgba(255, 90, 90, 0.15)'    /* 라이트 활성 — 레드 */
    return 'rgba(0, 0, 0, 0.3)'      /* 비활성 공통 */
  }};

  svg {
    transition: all 0.2s ease;

    stroke: ${({ $isLiked, $isDarkMode }) => {
      if ($isLiked) return 'transparent'
      return '#ffffff'
    }};

    fill: ${({ $isLiked, $isDarkMode }) => {
      if ($isLiked) return $isDarkMode ? '#279de6' : '#ff5a5a'
      return 'transparent'
    }};
  }

  &:hover svg {
    transform: scale(1.1);
  }
`