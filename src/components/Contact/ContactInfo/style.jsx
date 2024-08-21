import styled from "styled-components";

export const ContactInfoCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  justify-content: center;
  gap: 20px;
  padding: 60px 7%;
`;

export const ContactInfoCard = styled.article`
  display: grid;
  /* gap: 10px; */
  grid-template-columns: 60px;
  grid-template-areas:
    "icon title"
    "icon text";
`;

export const Icon = styled.i`
  background-color: var(--light-black);
  color: var(--green);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: 0.5s;
  font-size: 2rem;
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -10px;

  &:hover {
    background: var(--white);
  }
`;

export const Title = styled.h4`
  --white: #ffffff50;
  color: var(--white);
  font-size: 1.2rem;
  grid-area: title;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: var(--white);
  font-size: 0.9rem;
  grid-area: text;
`;
