import {
  Icon,
  Info,
  InfoImg,
  InfoImgContainer,
  InfoList,
  InfoListItem,
  InfoListOne,
  InfoListTwo,
  InfoText,
  InfoTextHeader,
  InfoTextHeaderTitle,
  InfoType,
  InfoTypeText,
  Text,
} from "./style";
import GirlImg from "./../../../assets/profile-img.jpg";
import PhotographerData from "./PhotographerData/PhotographerData";
import { FaAngleRight } from "react-icons/fa6";

const PhotographerInfo = () => {
  const DoubleList = Math.ceil(PhotographerData.length / 2);
  const FirstList = PhotographerData.slice(0, DoubleList);
  const SecondList = PhotographerData.slice(DoubleList);
  const CardList = [FirstList, SecondList];
  return (
    <Info>
      <InfoImgContainer>
        <InfoImg src={GirlImg}></InfoImg>
      </InfoImgContainer>
      <InfoText>
        <InfoTextHeader>
          <InfoTextHeaderTitle>
            Professional Photographer from New York
          </InfoTextHeaderTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </InfoTextHeader>
        <InfoList>
          {CardList.map((itemList, index) => (
            <>
              {index === 0 ? (
                <InfoListOne>
                  {itemList.map((item) => (
                    <InfoListItem key={item.id}>
                      <Icon>
                        <FaAngleRight />
                      </Icon>
                      <InfoType>{item.infotype}</InfoType>
                      <InfoTypeText>{item.info}</InfoTypeText>
                    </InfoListItem>
                  ))}
                </InfoListOne>
              ) : (
                <InfoListTwo>
                  {itemList.map((item) => (
                    <InfoListItem key={item.id}>
                      <Icon>
                        <FaAngleRight />
                      </Icon>
                      <InfoType>{item.infotype}</InfoType>
                      <InfoTypeText>{item.info}</InfoTypeText>
                    </InfoListItem>
                  ))}
                </InfoListTwo>
              )}
            </>
          ))}
        </InfoList>
        <Text>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio
          vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
          incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
          officiis quidem quia. Sed et consectetur qui quia repellendus itaque
          neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
          repellendus omnis culpa magni laudantium dolores.
        </Text>
        <Text>
          Recusandae est praesentium consequatur eos voluptatem. Vitae dolores
          aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime
          corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui
          et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim.
          Numquam alias sint possimus eveniet ad. Ratione in earum eum magni
          totam.
        </Text>
      </InfoText>
    </Info>
  );
};

export default PhotographerInfo;
