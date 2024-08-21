import styled from "styled-components";

export const PricesContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 50px 7%;
`;

export const PricesHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Subtitle = styled.span`
  color: var(--light-black);
  position: relative;
  text-transform: uppercase;
  font-size: 1rem;

  &:after {
    position: absolute;
    content: "";
    width: 100px;
    height: 1px;
    background: var(--green);
    left: 70px;
    top: 50%;
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-family: var(--cardo-font);
  font-size: clamp(1.7rem, 4vw, 2.5rem);
`;

export const PricesListSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
`;

export const PricesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const PriceItem = styled.li`
  display: flex;
  border-bottom: 3px dotted var(--light-black);
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const TypeProductName = styled.p`
  --white: #ffffff40;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
`;

export const TypeProductPrice = styled.span`
  color: var(--white);
  font-size: 1rem;
`;
