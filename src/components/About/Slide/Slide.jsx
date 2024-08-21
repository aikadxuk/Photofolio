import {
  ArrowIcon,
  ArrowIconContainer,
  AvatarImg,
  SlideContainer,
  SlideContainerBlock,
  SlideContainerBlockCard,
  SlideContainerBlockCardFooter,
  SlideContainerBlockCardFooterJob,
  SlideContainerBlockCardFooterName,
  SlideContainerBlockCardHeader,
  SlideContainerBlockCardIcon,
  SlideContainerBlockCards,
  SlideContainerBlockCardText,
  SlideContainerMainHeader,
  SlideContainerMainHeaderTitle,
} from "./style";
import SlideData from "./SlideData/SlideData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";

const Slide = () => {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (direction < 0) {
      setDirection(0);
    } else if (direction > 100) {
      setDirection(100);
    }
  }, [direction]);

  const handleLeftDirection = () => {
    setDirection((prev) => (prev > 0 ? prev - 100 : prev));
  };

  const handleRightDirection = () => {
    setDirection((prev) => (prev < 100 ? prev + 100 : prev));
  };

  return (
    <SlideContainer>
      <SlideContainerMainHeader>
        <SlideContainerMainHeaderTitle>
          What they are saying
        </SlideContainerMainHeaderTitle>
      </SlideContainerMainHeader>
      <SlideContainerBlock>
        <SlideContainerBlockCards direction={direction}>
          {SlideData.map((card) => (
            <SlideContainerBlockCard key={card.id}>
              <SlideContainerBlockCardHeader>
                <SlideContainerBlockCardIcon>
                  {card.star}
                </SlideContainerBlockCardIcon>
              </SlideContainerBlockCardHeader>
              <SlideContainerBlockCardText>
                {card.text}
              </SlideContainerBlockCardText>
              <AvatarImg src={card.img}></AvatarImg>
              <SlideContainerBlockCardFooter>
                <SlideContainerBlockCardFooterName>
                  {card.nameuser}
                </SlideContainerBlockCardFooterName>
                <SlideContainerBlockCardFooterJob>
                  {card.job}
                </SlideContainerBlockCardFooterJob>
              </SlideContainerBlockCardFooter>
            </SlideContainerBlockCard>
          ))}
        </SlideContainerBlockCards>
        <ArrowIconContainer>
          <ArrowIcon onClick={handleLeftDirection}>
            <IoIosArrowBack />
          </ArrowIcon>
          <ArrowIcon onClick={handleRightDirection}>
            <IoIosArrowForward />
          </ArrowIcon>
        </ArrowIconContainer>
      </SlideContainerBlock>
    </SlideContainer>
  );
};

export default Slide;
