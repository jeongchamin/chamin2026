import * as S from './Footer.style';
import styled from 'styled-components';

function Footer() {


    return(
        <S.FooterWrapper>
            <S.FooterInner>

                <S.FooterInfo>
                    <h4 className='brand-name'>POFOL</h4>
                    <S.Copyright>© Chamin Portfolio. All rights reserved.</S.Copyright>
                </S.FooterInfo>
                            
            </S.FooterInner>
        </S.FooterWrapper>
    )
};

export default Footer;