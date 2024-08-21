import styled from "styled-components";

export const TitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const TitleText = styled.h1`
  color: var(--white);
  font-family: var(--cardo-font);
  max-width: 600px;
  text-align: center;
  font-size: ${({ isHome }) =>
    isHome ? "clamp(2.2rem, 3vw, 2.3rem)" : "clamp(2.5rem,4vw,4rem)"};
`;

export const TitleParagraph = styled.p`
  color: var(--gray);
  text-align: center;
  padding: 30px;
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  max-width: 700px;
`;

export const GreenName = styled.span`
  position: relative;
  color: var(--white);
  font-family: inherit;

  &::before {
    position: absolute;
    content: "";
    background: var(--green);
    width: 103%;
    left: -2px;
    height: 20px;
    top: 60%;
    z-index: -1;
  }
`;
