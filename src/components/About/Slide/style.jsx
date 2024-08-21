import styled from "styled-components";

export const SlideContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 7%;
`;

export const SlideContainerMainHeader = styled.header``;

export const SlideContainerMainHeaderTitle = styled.h2`
  font-family: var(--cardo-font);
  color: var(--white);
  font-size: clamp(1.5rem, 3vw, 2rem);
`;

export const SlideContainerBlock = styled.section`
  position: relative;
  max-width: 1200px;
  overflow: hidden;
  height: 400px;
`;

export const SlideContainerBlockCards = styled.div`
  position: absolute;
  width: 200%;
  transition: 0.6s;
  left: ${({ direction }) => `-${direction}%`};
  top: 0;
  display: flex;
  gap: 20px;
`;

export const ArrowIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 40%;

  @media (width <= 770px) {
    top: 34%;
  }
`;

export const ArrowIcon = styled.i`
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 50%;
  width: clamp(40px, 4vw, 50px);
  height: clamp(40px, 4vw, 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 2vw, 2rem);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;

export const SlideContainerBlockCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: var(--light-black);
  border-radius: 5px;
  padding: 2%;
`;

export const SlideContainerBlockCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContainerBlockCardIcon = styled.i`
  color: var(--yellow);
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

export const SlideContainerBlockCardText = styled.p`
  color: var(--white);
  font-size: clamp(0.7rem, 2vw, 1rem);
  text-align: center;
  font-style: italic;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
  max-width: clamp(60px, 6vw, 100px);
  border: 5px solid var(--light-black);
`;

export const SlideContainerBlockCardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SlideContainerBlockCardFooterName = styled.h4`
  color: var(--white);
  font-size: clamp(0.8rem, 1.5vw, 1.1rem);
`;

export const SlideContainerBlockCardFooterJob = styled.p`
  color: var(--white);
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
`;
