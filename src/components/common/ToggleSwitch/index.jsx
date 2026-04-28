import * as S from './style';

const ToggleSwitch = ({ 
  id,           // 여러 개 쓸 때 구분하기 위한 ID
  isOn,         // 현재 상태 (boolean)
  onToggle,     // 클릭 시 실행할 함수
  leftLabel,    // 왼쪽 텍스트 (예: 'Sleep')
  rightLabel,   // 오른쪽 텍스트 (예: 'Charge')
  leftIcon,     // 왼쪽 상태일 때 핸들 안의 아이콘 (옵션)
  rightIcon,    // 오른쪽 상태일 때 핸들 안의 아이콘 (옵션)
  activeColor   // 활성화 시 포인트 컬러 (옵션)
}) => {
  return (
    <S.ToggleWrapper>
      <input 
        type="checkbox" 
        id={id} 
        checked={isOn} 
        onChange={onToggle} 
        className="visually-hidden" 
      />
      <S.ToggleLabel htmlFor={id} $isOn={isOn} $activeColor={activeColor}>
        <S.StatusText $active={!isOn}>{leftLabel}</S.StatusText>
        
        <S.SwitchHandle $isOn={isOn} $activeColor={activeColor}>
           {isOn ? rightIcon : leftIcon}
        </S.SwitchHandle>
        
        <S.StatusText $active={isOn}>{rightLabel}</S.StatusText>
      </S.ToggleLabel>
    </S.ToggleWrapper>
  );
};

export default ToggleSwitch;