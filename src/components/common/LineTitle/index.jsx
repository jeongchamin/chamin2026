import * as S from './style';

const LineTitle = ({
    label,        // 타이틀명 
    }) => {

    return(
        <S.SectionTitle>
            <S.BorderWrap>
                <S.GlowPoint/>
            </S.BorderWrap>

            <S.TitleText>{label}</S.TitleText>
        </S.SectionTitle>
    );
};

export default LineTitle;