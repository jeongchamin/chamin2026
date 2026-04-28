import styled, { keyframes, css } from 'styled-components';
import { Button } from '../../common';
const bounceInAndOut = keyframes`

  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.3); 
  }
  15% {
    opacity: 1;
    transform: translateY(-5px) scale(1.1);
  }
  20% {
    transform: translateY(0) scale(1);     
  }

  80% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  100% {
    opacity: 0;
    transform: translateY(-10px) scale(1); 
  }
`;

export const UserProfileWrapper = styled.section`

`;

export const UserProfile = styled.section`
    background: ${props => props.theme.colors.contentsBg};
    padding: 40px;
    border-radius: ${props => props.theme.radius};
    
    ${({ theme }) => theme.media.mobile} {
       padding: 32px 20px;
    }
`;

export const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    ${({ theme }) => theme.media.mobile} {
       flex-wrap: wrap;
    }
`;
export const ProfilePic = styled.div`
    width: 80px;
    height: 80px;
    background: #eeeeee;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        display: block;
        width: 90px;
        height: 90px;
        background: #eeeeee;
    }
`;
export const UserName = styled.div`
    .user-name{
        font-size:1.4rem;
        line-height: 1.3;
        font-weight: 500;
    }
    .user-job{
        font-size:0.8125rem;
        color: ${props => props.theme.colors.accent};
    }

`;
export const UserPosition = styled.p`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding-bottom: 22px;
    svg{
        stroke:none;
        path{
            fill:${props => props.theme.colors.muted};
        }
        circle{
            fill:${props => props.theme.colors.contentsBg};
        }
    }
    span{
        font-size:0.7rem;
        color: ${props => props.theme.colors.muted};
        margin-bottom: -2px;
    }
    
    ${({ theme }) => theme.media.mobile} {
        width: 100%;  
    }

`;

export const ProfileContents = styled.div`
    padding-left: 100px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    transition: all 0.5s ease-in-out;

    /* 태블릿 1024 */
    ${({ theme }) => theme.media.tablet} {
        grid-template-columns: 1fr;
    }

    /* 모바일 768 */
    ${({ theme }) => theme.media.mobile} {
        gap: 60px;
        padding-left: 0px;
    }
`;

export const ProfileCon = styled.div`
    .info-title{
        text-transform: uppercase;
        font-size: 0.75rem;
        color: ${props => props.theme.colors.muted};
        margin-bottom: 20px;
    }
    .info-between{
        li{
            position: relative;
            display: grid;
            grid-template-columns: 100px 1fr;
            gap: 48px;
            font-weight:${props => props.theme.fontWeight.regular};
            &+li{
                margin-top: 8px;
            }
            ${({ theme }) => theme.media.mobile}{
                grid-template-columns: 80px 1fr;
                gap: 2px;
            }
            
        }
    }
    .skill-wrap{
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding-right: 50px;
        padding-top: 5px;
    }
    .info-list{
        position: relative;
        li{
            font-weight:${props => props.theme.fontWeight.regular};
            &+li{
                margin-top: 8px;
            }
        }
    }
`;

export const ContactEffect = styled.a`
    &:hover{
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: ${props => props.theme.colors.accent};
    }
`;

export const ContactEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    transform: translateY(-5px);
    gap: 16px;
    ${({ theme }) => theme.media.mobile}{
        transform: translateY(0px);
    }
`;

export const CopyButton = styled(Button)`
    position: relative;
    border-radius: 6px;
    padding: 7px 8px;

    svg{
        stroke: ${props => props.theme.colors.primaryBtnText};
    }
    &:hover{
        background: ${({ theme }) => theme.isDark ? '#F5F5F5' : '#FFF0ED'};
    }
    ${({ theme }) => theme.media.mobile}{
        display: none;
    }
    
    .copied {
        position: absolute;
        opacity: 0;
        top: 10px;
        right: -60px;
        font-size: 0.8125rem;
        transform: translateY(0);
        transition: all 0.3s ease;
        color: ${props => props.theme.colors.accent};
        font-weight: 500;
        white-space: nowrap;
        pointer-events: none;

        ${({ $isCopied }) => $isCopied && css`
        animation: ${bounceInAndOut} 1.8s ease-out forwards; // 1.8초 동안 실행 후 마지막 상태 유지
        `}
    }
`;



export const PartnerBadge = styled.div`
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    color: ${props => props.theme.colors.accent};
`;

export const ExperienceItem = styled.div`
`;

export const SkillBadge = styled.span`
    font-size: 0.8125rem;
    font-weight: 500;
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.accentMuted};
`;

export const PartnerGuide = styled.div`
    margin-top: 10px;
    padding: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.contentsBg};
    color: ${props => props.theme.colors.text};
    border-radius: ${props => props.theme.radius};
    font-size: 0.9375rem;
    p{
        display: inline-flex;
        gap: 10px;
        .accent{
            color: ${props => props.theme.colors.accent};
            font-weight: 400;
        }
        svg{
            vertical-align: -4px;
            path:nth-child(1){
                stroke: ${props => props.theme.colors.accent};
                fill: ${props => props.theme.colors.accent};
            }
            path:nth-child(2),
            path:nth-child(3){
                stroke: ${props => props.theme.colors.contentsBg};
            }
        }
    }
`;