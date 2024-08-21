import Global from "./../Global/Global";
import HeaderTitle from "./../Global/HeaderTitle/HeaderTitle";
import Header from "./../Global/Header/Header";
import GalleryTypeComponent from "./GalleryTypeComponent/GalleryTypeComponent";
import { useParams } from "react-router-dom";

const GalleryType = () => {
  const { type } = useParams();

  return (
    <>
      <Global />
      <Header />
      <HeaderTitle
        title={type}
        text="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <GalleryTypeComponent />
    </>
  );
};

export default GalleryType;
