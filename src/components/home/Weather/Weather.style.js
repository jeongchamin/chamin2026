import styled from "styled-components";

export const WeatherWrapper = styled.section`
    margin-top: -150px;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: flex-end;

        
    .skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px;
    height: 16px;
    margin-bottom: 8px;
    }
    .skeleton.short { width: 60%; }

    @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
    }

`;

export const WeatherCard = styled.div`
    position: relative;
    padding: 32px 40px;
    width: 400px;
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);

    ${({ theme }) => theme.media.mobile} {
        width: 100%;
        padding: 32px 20px;
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 40px;
        background: ${({ theme }) => theme.colors.contentsBg};
        width: 100%;
        height: 100%;
        opacity: 0.3;
        z-index: -1;
    }

    .city{
        display: flex;
        align-items: center;
        gap: 6px;
        span{
            font-size:0.9rem;
            font-weight:500;
        }
    }
    .temp{
        margin-top: 24px;
        text-align: center;
        font-size:2.4rem;
        font-weight:800;
    }
    .desc{
        text-align: center;
    }
    .detail{
        border-top: 1px solid ${({ theme }) => theme.colors.primaryBorder};
        padding-top: 16px;
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .detail-humidi,
        .detail-wind,
        .detail-feels{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                font-size: 0.7rem;
                font-weight: 300;
            }
            strong{
                font-size: 0.9rem;
                font-weight: 600;
            }
        }
    }
`;

export const Skeleton = styled.div`
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,   /* 회색 */
    #f0f0f0 50%,   /* 밝아졌다가 */
    #e0e0e0 75%    /* 다시 회색 */
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;  /* 반짝반짝 흐르는 효과 */
  border-radius: 8px;

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

export const ErrorCard = styled.div`
`;