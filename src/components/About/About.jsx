import Global from "../Global/Global";
import Header from "../Global/Header/Header";
import HeaderTitle from "./../Global/HeaderTitle/HeaderTitle";
import PhotographerInfo from "./PhotographerInfo/PhotographerInfo";
import Slide from "./Slide/Slide";

const About = () => {
  return (
    <>
      <Global />
      <Header />
      <HeaderTitle
        title="About"
        text="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <PhotographerInfo />
      <Slide />
    </>
  );
};

export default About;
