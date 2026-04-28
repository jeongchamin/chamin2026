import * as S from './Hero.style';
import useSettingsStore from '../../../store/useSettingsStore';

import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import bgLight from '../../../assets/images/heroBg_light.png';
import bgDark from '../../../assets/images/heroBg_dark.png';

function Hero(){

    const { isDarkMode} = useSettingsStore();
    
    return(
        <S.HeroWrapper>

            <video
                className="hero__video"
                autoPlay
                muted
                loop
                playsInline
                poster={isDarkMode ? bgDark : bgLight}
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            <div className="hero__overlay" />

            <S.HeroContent>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1.0, ease: [0.21, 0.61, 0.5, 1] }}
                    >
                    HELLO
                </motion.h1>

                {/* 타이핑으로 서브 문구 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }} 
                    >
                    <S.TypeWrap>
                        <TypeAnimation
                            sequence={[
                            1000,
                            '> Welcome.',
                            800,
                            '> Welcome.\nI build things for the web...',
                            ]}
                            repeat={0}
                            style={{ whiteSpace: 'pre-line' }}
                        />
                    </S.TypeWrap>

                </motion.div>
            </S.HeroContent>
                
        </S.HeroWrapper>
    )
}

export default Hero;