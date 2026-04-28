import * as S from './Header.style';
// import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '../../common';
import { LuBatteryCharging, LuEyeClosed} from 'react-icons/lu';
import useAuthStore from '../../../store/useAuthStore';
import useSettingsStore from '../../../store/useSettingsStore';
import useMediaQuery from '../../../hooks/useMediaQuery';

function Header() {

  const { isDarkMode, toggleDarkMode } = useSettingsStore();

  //파트너인가요?
  const { isPartner, toggleRole } = useAuthStore();
  
  // 스크롤 되었나요?
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //모바일
  const isMobile = useMediaQuery('(max-width: 768px)');

  const buttonLabel = isPartner
  ? isMobile ? 'Partner' : 'Partner Authorized'
  : isMobile ? 'Guest' : 'Guest Access';

  return (
    <S.HeaderWrapper $isScrolled={isScrolled}>
      <S.HeaderInner>
        <S.Logo to='/' aria-label="POFOL 홈으로 이동">
          <span aria-hidden="true">POFOL<em>✦</em></span>
          <span className="visually-hidden">POFOL 홈</span>
        </S.Logo>

        <S.HeaderUtil>

          <Button type="button" onClick={toggleRole}>
            {buttonLabel}
          </Button>

          <S.ModeButton 
            variant="gradient" 
            $isDarkMode={isDarkMode} 
            size="icon" 
            onClick={toggleDarkMode}
          >
            <S.TextMask>
              <S.SlidingWrapper $isDarkMode={isDarkMode}>
                <div className="unit"><LuEyeClosed size={24} /> <span>Sleep</span></div>
                <div className="unit"><span>Charge</span> <LuBatteryCharging size={24} /></div>
              </S.SlidingWrapper>
            </S.TextMask>
          </S.ModeButton>


        </S.HeaderUtil>

      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}

export default Header;