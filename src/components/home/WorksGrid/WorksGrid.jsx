import * as S from './WorksGrid.style';
import { fadeUp } from '../../../styles/variants';
import useLikeStore from '../../../store/useLikeStore';
import useSettingsStore from '../../../store/useSettingsStore';
import { LuHeart, LuZap } from 'react-icons/lu'
import useMediaQuery from '../../../hooks/useMediaQuery'

import img_work_gum from '../../../assets/images/img_work_gum.png';
import img_work_popeyes from '../../../assets/images/img_work_popeyes.png';
import img_work_jungone from '../../../assets/images/img_work_jungone.png';
import img_work_wealthguide from '../../../assets/images/img_work_wealthguide.png';
import img_work_nene from '../../../assets/images/img_work_nene.png';
import img_work_sejong from '../../../assets/images/img_work_sejong.png';
import img_work_hanwha from '../../../assets/images/img_work_hanwha.png';
import img_work_item from '../../../assets/images/img_work_item.png';

const breakpoints = {
  default: 3,
  1024: 2,
  768: 2,
}

const worksData = [
  { id: 1, title: '세종사이버대학교', colSpan: '1 / 3', rowSpan: '1 / 2', img:img_work_sejong ,mobileHeight: '190px' , link: 'https://home.sjcu.ac.kr/ko/index.do'}, 
  { id: 2, title: '대상 : 정원e샵', colSpan: '3 / 4', rowSpan: '1 / 3', img:img_work_jungone, mobileHeight: '340px' , link: 'https://www.jungoneshop.com'  }, 
  { id: 3, title: '네네치킨', colSpan: '1 / 2', rowSpan: '2 / 4' , img:img_work_nene, mobileHeight: '240px' , link: 'https://nenechicken.com' },
  { id: 4, title: '아이템플레이', colSpan:'2 / 3', rowSpan: '2 / 3' , img:img_work_item, mobileHeight: '190px' , link: null },
  { id: 5, title: '한화금융서비스', colSpan: '2 / 3', rowSpan: '3 / 5' , img:img_work_hanwha, mobileHeight: '300px' , link: null },
  { id: 6, title: 'Wealthguide', colSpan: '3 / 4', rowSpan: '3 / 5', img:img_work_wealthguide, mobileHeight: '350px' , link: 'https://www.wealthguide.co.kr' },
  { id: 7, title: '파파이스', colSpan: '1 / 2', rowSpan: '4 / 6', img:img_work_popeyes, mobileHeight: '380px' , link: 'https://www.popeyes.co.kr' },
  { id: 8, title: 'Sunstar G.U.M', colSpan: '2 / 4', rowSpan: '5 / 6' , img:img_work_gum, mobileHeight: '190px' , link: null },

];

// 공통 카드 내부 컴포넌트
const CardContent = ({ work }) => {
  const { toggleLike, isLiked } = useLikeStore()
  const { isDarkMode } = useSettingsStore()

  return (
    <>
      <img src={work.img} alt={work.title} />

      <S.Overlay>
        <S.WorkTitle>{work.title}</S.WorkTitle>
        {work.link && (
          <S.VisitButton
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            사이트 방문
          </S.VisitButton>
        )}
      </S.Overlay>

      <S.LikeButton
        type="button"
        $isLiked={isLiked(work.id)}
        $isDarkMode={isDarkMode}
        onClick={() => toggleLike(work.id)}
      >
        {isDarkMode ? <LuZap size={20} /> : <LuHeart size={20} />}
      </S.LikeButton>
    </>
  )
}

const WorksGrid = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const likes = useLikeStore(state => state.likes)
  const { isDarkMode } = useSettingsStore()

  return(
    <>
      <S.LikedWrap>
        <S.LikedCnt>
          {isDarkMode ? <LuZap size={24} /> : <LuHeart size={24} />}
          <span className='liked-cnt'>{likes.length}</span>
          
        </S.LikedCnt>

      </S.LikedWrap>

      {isMobile ? (
        <S.MasonryWrap
          breakpointCols={breakpoints}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {worksData.map((work) => (
            <S.MasonryCard
              key={work.id}
              $height={work.mobileHeight}
              $hasLink={!!work.link}
            >
              <CardContent work={work} />
            </S.MasonryCard>
          ))}
        </S.MasonryWrap>
      ):(
        <S.GridContainer>
          {worksData.map((work, index) => (
            <S.WorkCard
              key={work.id}
              $hasLink={!!work.link}
              $colSpan={work.colSpan}
              $rowSpan={work.rowSpan}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
            >
              <CardContent work={work} />
            </S.WorkCard>
          ))}
        </S.GridContainer>
      )}
    </>
  )
  
}

export default WorksGrid;