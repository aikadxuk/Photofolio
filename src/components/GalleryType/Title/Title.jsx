import {
  GalleryTypeHeader,
  GalleryTypeHeaderText,
  GalleryTypeHeaderTitle,
} from "./style";
import GreenButton from "./../../Global/GreenButton/GreenButton";
import { useParams } from "react-router-dom";

const Title = () => {
  const { type } = useParams();

  return (
    <GalleryTypeHeader>
      <GalleryTypeHeaderTitle>{type}</GalleryTypeHeaderTitle>
      <GalleryTypeHeaderText>
        Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
        odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis
        veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
      </GalleryTypeHeaderText>
      <GreenButton text="Available for hire" />
    </GalleryTypeHeader>
  );
};

export default Title;
