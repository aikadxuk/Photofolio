import styled from "styled-components";

export const Info = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 10%;
  gap: 20px;

  @media (width <= 1006px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoImgContainer = styled.article`
  width: 700px;
  max-width: 500px;

  @media (width <= 1185px) {
    max-width: 400px;
  }
`;
export const InfoImg = styled.img`
  width: 100%;
`;

export const InfoText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoTextHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoTextHeaderTitle = styled.h3`
  color: var(--green);
  font-size: 1.6rem;

  @media (width <= 640px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  color: var(--white);
  font-size: clamp(0.8rem, 1.5vw, 1rem);
`;

export const InfoList = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 0;
`;

export const InfoListOne = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoListTwo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoListItem = styled.li`
  color: var(--white);
  position: relative;
  display: flex;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
  padding-left: 20px;
`;

export const InfoType = styled.b``;

export const InfoTypeText = styled.p`
  padding-left: 5px;
`;

export const Icon = styled.i`
  color: var(--green);
  position: absolute;
  left: 0px;
`;
