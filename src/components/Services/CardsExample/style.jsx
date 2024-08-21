import styled from "styled-components";

export const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 20px;
  padding: 40px 7%;
`;

export const CardIcon = styled.i`
  color: var(--white);
  background: var(--green);
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: var(--light-black);
  position: relative;
  padding: 50px 7%;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;

  &::before {
    position: absolute;
    content: "";
    top: -100%;
    left: 0;
    background: var(--green);
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    top: 0;
    transition: 0.5s;
  }

  &:hover ${CardIcon} {
    color: var(--green);
    background-color: var(--white);
    transition: 0.5s;
    z-index: 1;
  }
`;

export const CardTitle = styled.h3`
  color: var(--white);
  font-size: 1.3rem;
  z-index: 1;
`;

export const CardText = styled.p`
  color: var(--white);
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  z-index: 1;
`;
