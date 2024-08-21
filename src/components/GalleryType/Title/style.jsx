import styled from "styled-components";

export const GalleryTypeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const GalleryTypeHeaderTitle = styled.h1`
  color: var(--white);
  font-family: var(--cardo-font);
  max-width: 600px;
  font-weight: 400;
  text-align: center;
  font-size: clamp(2.2rem, 5vw, 3rem);
`;

export const GalleryTypeHeaderText = styled.p`
  color: var(--gray);
  text-align: center;
  padding: 30px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  max-width: 700px;
`;
