import { Card, CardIcon, Cards, CardText, CardTitle } from "./style";
import CardsExampleData from "./CardsExampleData/CardsExampleData";

const CardsExample = () => {
  return (
    <Cards>
      {CardsExampleData.map((card) => (
        <Card key={card.id}>
          <CardIcon>{card.icon}</CardIcon>
          <CardTitle>{card.title}</CardTitle>
          <CardText>{card.text}</CardText>
        </Card>
      ))}
    </Cards>
  );
};

export default CardsExample;
