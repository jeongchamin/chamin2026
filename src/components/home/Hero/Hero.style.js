import styled from "styled-components";


export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #0d0d0d;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;


  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: all 0.35s ease-in-out;
  }
  .hero__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.16);
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.background});
    z-index: 2;
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: clamp(3rem, 18vw, 16rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: 0.1em;
  }
`
export const TypeWrap = styled.div`
  min-height: 80px;  
  span{
    font-size: clamp(1rem, 2vw, 1.1rem);
    color: #ffffff;
    opacity: 0.7;
    font-weight: 200;
    letter-spacing: 0.05em;
  }
`


