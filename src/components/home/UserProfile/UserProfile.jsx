import * as S from './UserProfile.style';
import useAuthStore from '../../../store/useAuthStore';
import { LuMapPin, LuShieldAlert, LuCopy, LuMessageCircleMore } from 'react-icons/lu';
import { Button } from '../../common/Button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';
import profile from '../../../assets/images/profile.jpg';
import kakaoQr from '../../../assets/images/img_kakao_qr.png'

function UserProfile(){

    const isPartner = useAuthStore((state) => state.isPartner);
    const setPartner = useAuthStore((state) => state.setPartner);

    const userInfo = [
        {category:'Birthday', info:'June 9th, 1989'},
        {category:'Gender', info:'Female'},
        {category:'Phone', info:'010-7117-4595'},
        {category:'E-mail', info:'jeongchamin@gmail.com'},
    ];
    const userSkills = ['HTML','CSS','Javascript','Jquery',
        'React','Git','Figma','Zeplin','Illustrator','Photoshop',
        'Styled-components','Zustand','Scss'];
    const userExperience = [
        {company:'아이템플레이',project:'아이템 거래사이트', date:'2026.02'},
        {company:'한화생명금융서비스',project:'보험 IT프로젝트', date:'2025.09 ~ 2026.02'},
        {company:'Wealthguide',project:'연금자문서비스', date:'2020.10 ~ 2025.05'},
        {company:'듀아랩',project:'대상 정원e샵', date:'2018.12 ~ 2019.12'},
        {company:'BVS',project:'사이버대학교', date:'2018.06 ~ 2018.12'},
        {company:'핸섬피쉬',project:'GUM, 스마트카라', date:'2017.09 ~ 2017.11'},
        {company:'더블에스텍',project:'파파이스, 네네치킨', date:'2014.09 ~ 2017.06'},
    ];

    
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (emailValue) => {
        if (!emailValue) return; // 방어 코드

        navigator.clipboard.writeText(emailValue);
        setCopied(true);
        toast('이메일이 복사되었습니다.');
        setTimeout(() => setCopied(false), 2000); // 2초 뒤에 원래대로
    };

    return(
        <S.UserProfileWrapper>
            <S.UserProfile>

                <S.ProfileHeader>
                    <S.ProfilePic>
                        <img 
                            src={profile} 
                            alt="프로필사진" 
                        />
                    </S.ProfilePic>

                    <S.UserName>
                        <h4 className='user-name'>Jeong Chamin</h4>
                        <span className='user-job'>Publisher</span>
                    </S.UserName>
                
                    <S.UserPosition>
                        <LuMapPin size={16} />
                        <span>Siheung-si, Gyeonggi-do, Republic of Korea</span>
                    </S.UserPosition>

                    <S.SendMsgQr>
                        <div className='modal-qr'>
                            <div className='qr-mark'>
                                <img src={kakaoQr} alt="카카오톡 메시지보내기"/>
                            </div>
                            <span>QR코드를 스캔하여<br/>카카오톡 메시지를 남겨주세요.</span>
                        </div>
                        <div className='modal-toggle'>
                            <LuMessageCircleMore/>
                        </div>
                    </S.SendMsgQr>

                </S.ProfileHeader>

                <S.ProfileContents>
                    <S.ProfileCon>
                        <div className='info-title'>Basic Information</div>
                        <ul className='info-between'>
                            <li>
                                <span>{userInfo[0].category} :</span>
                                <span>{isPartner ? userInfo[0].info : `${userInfo[0].info.slice(0,12)}**`}</span>
                            </li>
                            <li>
                                <span>{userInfo[1].category} :</span>
                                <span>{userInfo[1].info}</span>
                            </li>
                        </ul>
                    </S.ProfileCon>

                    <S.ProfileCon>
                        <div className='info-title'>Contact Information</div>
                        <ul className='info-between'>
                            <li>
                                <span>{userInfo[2].category} :</span>
                                <S.ContactEffect href={`tel:${userInfo[2].info}`}>
                                    {isPartner ? userInfo[2].info : `${userInfo[2].info.slice(0,9)}****`}
                                </S.ContactEffect>
                            </li>
                            <li>
                                <span>{userInfo[3].category} :</span>
                                <S.ContactEmail>
                                    <span>{userInfo[3].info}</span>
                                    <S.CopyButton 
                                        type="button" 
                                        variant="ghost" 
                                        $isCopied={copied} 
                                        onClick={() => handleCopyEmail(userInfo[3].info)}
                                        >
                                        <LuCopy size="20"/>
                                        <span className='copied'>Copied!</span>
                                    </S.CopyButton>
                                </S.ContactEmail>

                            </li>
                        </ul>
                        
                    </S.ProfileCon>

                    <S.ProfileCon>
                        <div className='info-title'>SKILLS</div>
                        <div className='skill-wrap'>
                            {userSkills.map((item => (
                                <S.SkillBadge key={item}>{item}</S.SkillBadge>
                            )))}
                        </div>
                    </S.ProfileCon>

                    <S.ProfileCon>
                        <div className='info-title'>EXPERIENCE</div>
                        <ul className='info-list'>
                            {userExperience.map((item, idx) => (
                                <ExperienceItem key={idx} isPartner={isPartner} item={item} />
                            ))}

                            {!isPartner && (
                                <S.PartnerBadge isPartner={isPartner}>
                                PARTNER ONLY
                                </S.PartnerBadge>
                            )}
                        </ul>
                    </S.ProfileCon>
                </S.ProfileContents>

            </S.UserProfile>

            {!isPartner &&
                <S.PartnerGuide>
                    <p>
                        <LuShieldAlert/>
                        <span><strong className='accent'>'파트너' 버튼</strong>을 누르시면 상세 연락처와 경력을 확인하실 수 있습니다.</span>
                    </p>
                    <Button type='button' variants="primary" size="sm" onClick={setPartner}>Partner</Button>
                </S.PartnerGuide>
            }

        </S.UserProfileWrapper>
    );
};


// 개별 아이템 컴포넌트 
const ExperienceItem = ({ isPartner, item }) => {
  return (
    <motion.li
        animate={{ 
        filter: isPartner ? "blur(0px)" : "blur(8px)",
        opacity: isPartner ? 1 : 0.5,
        scale: isPartner ? 1 : 0.98
        }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: isPartner ? 'auto' : 'none' }} // 비공개일 땐 클릭 안되게
    >
        <span>{item.company} - {item.project} - {item.date}</span>
    </motion.li>

  );
};


export default UserProfile;