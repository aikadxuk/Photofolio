import {
  PriceItem,
  PricesList,
  PricesContainer,
  PricesHeader,
  PricesListSection,
  Subtitle,
  Title,
  TypeProductName,
  TypeProductPrice,
} from "./style";
import PricesData from "./PricesData/PricesData";

const Prices = () => {
  const PriceList = Math.ceil(PricesData.length / 2);
  const FirstList = PricesData.slice(0, PriceList);
  const SecondList = PricesData.slice(PriceList);
  const Lists = [FirstList, SecondList];
  return (
    <PricesContainer>
      <PricesHeader>
        <Subtitle>Prices</Subtitle>
        <Title>Check my adorable pricing</Title>
      </PricesHeader>
      <PricesListSection>
        {Lists.map((list, index) => (
          <>
            {index === 0 ? (
              <PricesList>
                {list.map((listOne) => (
                  <PriceItem key={listOne.id}>
                    <TypeProductName>{listOne.text}</TypeProductName>
                    <TypeProductPrice>{listOne.price}</TypeProductPrice>
                  </PriceItem>
                ))}
              </PricesList>
            ) : (
              <PricesList>
                {list.map((listTwo) => (
                  <PriceItem key={listTwo.id}>
                    <TypeProductName>{listTwo.text}</TypeProductName>
                    <TypeProductPrice>{listTwo.price}</TypeProductPrice>
                  </PriceItem>
                ))}
              </PricesList>
            )}
          </>
        ))}
      </PricesListSection>
    </PricesContainer>
  );
};

export default Prices;
