import styled, { keyframes } from 'styled-components';

const travel = keyframes`
  0%   { left: 0%;   opacity: 0; }
  8%   { opacity: 1; }  /* 시작부분 fade in */
  92%  { opacity: 1; }  /* 끝부분 fade out 시작 */
  100% { left: 100%; opacity: 0; }
`;

export const SectionTitle = styled.div`
  padding: 80px 0 32px;
`;

export const BorderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  overflow: visible;
  background: ${props => props.theme.colors.primaryBorder};
  margin-bottom: 24px;
`

export const GlowPoint = styled.div`
  position: absolute;
  top: 50%;
  width: 1px;
  height: 2px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${travel} 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  /* 다크/라이트 컬러 분기 */
  background: ${({ theme }) => theme.isDark ? '#10F5DE' : '#FF908C'};

  box-shadow: ${({ theme }) => theme.isDark ? `
    0 0 2px  1px  #10F5DE,
    0 0 2px  1px  rgba(16, 245, 222, 0.7),
    0 10px 2px  1px  rgba(16, 245, 222, 0.4),
    0 0 2px  1px rgba(16, 245, 222, 0.15)
  ` : `
    0 0 2px 1px  #FF908C,
    0 0 2px 1px  rgba(255, 144, 140, 0.7),
    0 0 2px 1px  rgba(255, 144, 140, 0.4),
    0 0 2px 1px rgba(255, 144, 140, 0.15)
  `};
`

export const TitleText = styled.h2`
    font-size:1.45rem;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
`;
