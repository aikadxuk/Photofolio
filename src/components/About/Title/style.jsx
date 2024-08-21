import styled from "styled-components";

export const HeaderTitle = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleText = styled.h1`
  color: var(--white);
  font-family: var(--cardo-font);
  max-width: 600px;
  text-align: center;
  font-size: clamp(2.2rem, 4vw, 4rem);
`;

export const TitleParagraph = styled.p`
  color: var(--gray);
  text-align: center;
  padding: 30px;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  max-width: 700px;
`;
