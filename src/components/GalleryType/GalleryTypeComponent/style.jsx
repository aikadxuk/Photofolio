import styled, { keyframes } from "styled-components";

export const GalleryContainer = styled.section`
  position: relative;
  padding: 3%;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 350px));
  gap: 10px;

  @media (width <= 670px) {
    grid-template-columns: repeat(2, minmax(120px, 350px));
  }
`;

export const GalleryImgOverlay = styled.div`
  --black: #00000090;
  position: absolute;
  top: 0;
  left: -100%;
  transition: 0.5s;
  width: 100%;
  height: 100%;
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const OpenOverlayButton = styled.i`
  color: var(--white);
  font-size: clamp(1rem, 2vw, 2rem);
  cursor: pointer;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

export const GalleryImgContainer = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  &:hover ${GalleryImg} {
    transform: scale(1.2);
  }

  &:hover ${GalleryImgOverlay} {
    left: 0;
  }
`;

const OverlayImgAnimation = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

export const OverlayBackground = styled.section`
  --black: #00000090;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  max-width: 100%;
  background: var(--black);
  display: grid;
  padding: 7%;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const OverlayBackgroundImgContainer = styled.div`
  width: 850px;
  height: 500px;
  max-width: 700px;
  max-height: 450px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  animation: ${OverlayImgAnimation} 1s forwards;

  @media (width <= 810px) {
    max-width: 600px;
    height: 400px;
  }

  @media (width <= 616px) {
    max-width: 450px;
    height: 300px;
  }

  @media (width <= 460px) {
    max-width: 300px;
    height: 230px;
  }
`;

export const OverlayBackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CloseOverlayBackground = styled.i`
  position: absolute;
  color: var(--green);
  font-size: 2rem;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const ImgOverlayTextContainer = styled.div`
  background: var(--black);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
`;

export const ImgOverlayText = styled.p`
  color: var(--white);
  text-align: center;
`;
