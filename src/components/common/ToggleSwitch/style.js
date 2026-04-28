import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 140px; /* 텍스트 공간을 위해 조금 넓게 잡습니다 */
  height: 45px;
  background: ${props => props.theme.colors.toggleBg};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
  transition: background 0.4s ease;
  border: 1px solid ${props => props.$isOn ? '#262A45' : '#E5E5E5'};
`;

export const StatusText = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  z-index: 1;
  width: 50px;
  text-align: center;
  transition: color 0.3s ease;
  color: ${props => props.$active ? (props.theme.mode === 'dark' ? '#fff' : '#000') : '#8e8e93'};
  opacity: ${props => props.$active ? 1 : 0.5};

`;

export const SwitchHandle = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 36px;
  height: 36px;
  background: ${props => props.theme.colors.gradientBtn};
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s ease-in-out;
  
  /* 다크모드일 때 오른쪽(Charge)으로 이동 */
  transform: ${props => props.$isOn ? 'translateX(66px)' : 'translateX(0)'};
`;