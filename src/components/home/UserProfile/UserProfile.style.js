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
    position: relative;
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

export const SendMsgQr = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 48px;
    height: 48px;
    .modal-qr{
        position: absolute;
        top: -5px;
        right: -5px;
        z-index: 2;
        background: #ffffff;
        border: 1px solid ${({theme}) => theme.colors.primaryBorder};
        border-radius:32px;
        opacity: 0;
        transition: transform 0.6s cubic-bezier(0.625, 0.05 ,0 ,1), opacity 0.18s ease 0.3s;
        transform-origin: top right;
        transform: scale(0);
        padding: 80px 20px 48px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 320px;
        box-sizing: border-box;
        span{
            color: #3A3838;
            font-size: 1rem;
        }
        ${({theme}) => theme.media.mobile}{
             width: calc(100vw - 86px);
        }
    }
    .qr-mark{
        width:180px;
        height:180px;
        transform: translateY(20px);
        opacity: 0;
        transition: transform 0.6s cubic-bezier(0.625, 0.05 ,0 ,1) , opacity 0.28s ease ;
        transition-delay: 0.6s; 
        img{
            width: 100%;
            height: 100%;
            aspect-ratio:1;
        }
    }
    .modal-toggle{
        position: absolute;
        top: 0;
        right: 0;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        transform: translate(0em, 0em);
        transition: transform 0.6s cubic-bezier(0.625, 0.05 ,0 ,1);
        padding: 12px;
        z-index: 3;
        border-radius: 50%;

        svg{
            width: 32px;
            height: 32px;
            color: ${({theme}) => theme.colors.accent};
            stroke-width: 1.5px;
            transition: transform 0.6s cubic-bezier(0.625, 0.05 ,0 ,1);
        }
    }

    &:hover{
        .modal-qr{
            opacity: 1;
            transform: scale(1);
        }
        .qr-mark{
            transform: translateY(0);
            opacity: 1;
        }
        .modal-toggle{
            transform: translate(-0.25em, 0.25em);
        }
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
    gap: 40px;
    background-color: ${props => props.theme.colors.contentsBg};
    color: ${props => props.theme.colors.text};
    border-radius: ${props => props.theme.radius};
    font-size: 0.9375rem;

    ${({ theme }) => theme.media.mobile} {
       padding: 20px 20px;
    }
    p{
        position: relative;
        display: flex;
        gap: 10px;
        padding-left: 30px;
        word-break: keep-all;
        .accent{
            color: ${props => props.theme.colors.accent};
            font-weight: 400;
        }
        svg{
            width: 1.4rem;
            height: 1.4rem;
            position: absolute;
            top: 0;
            left: 0px;
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