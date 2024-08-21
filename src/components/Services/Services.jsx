import Global from "./../Global/Global";
import Header from "./../Global/Header/Header";
import HeaderTitle from "./../Global/HeaderTitle/HeaderTitle";
import CardsExample from "./CardsExample/CardsExample";
import Prices from "./Prices/Prices";
import Slide from './../About/Slide/Slide'

const Services = () => {
  return (
    <>
      <Global />
      <Header />
      <HeaderTitle
        title="Services"
        text="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <CardsExample />
      <Prices />
      <Slide/>
    </>
  );
};

export default Services;
