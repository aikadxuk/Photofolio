import GalleryData from "./GalleryTypeData";
import {
  CloseOverlayBackground,
  GalleryContainer,
  GalleryImg,
  GalleryImgContainer,
  GalleryImgOverlay,
  ImgOverlayText,
  ImgOverlayTextContainer,
  OpenOverlayButton,
  OverlayBackground,
  OverlayBackgroundImg,
  OverlayBackgroundImgContainer,
} from "./style";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { useParams } from "react-router-dom";

const GalleryTypeComponent = () => {
  const [openImage, setOpenImage] = useState(null);

  const handleOpenImg = (index) => {
    setOpenImage(index);
  };

  const closeOverlay = () => {
    setOpenImage(null);
  };

  const { type } = useParams();

  const ImagesType = GalleryData.filter((img) => img.type === type);

  return (
    <>
      {ImagesType.length > 0 && (
        <GalleryContainer>
          {ImagesType.map((img, index) => (
            <GalleryImgContainer key={img.id}>
              <GalleryImg src={img.img} alt={img.alt}></GalleryImg>
              <GalleryImgOverlay>
                <OpenOverlayButton onClick={() => handleOpenImg(index)}>
                  <BsArrowsAngleExpand />
                </OpenOverlayButton>
              </GalleryImgOverlay>
            </GalleryImgContainer>
          ))}
          {openImage != null && (
            <OverlayBackground>
              <OverlayBackgroundImgContainer>
                <OverlayBackgroundImg
                  src={ImagesType[openImage].img}
                ></OverlayBackgroundImg>
                <CloseOverlayBackground onClick={closeOverlay}>
                  <FaXmark />
                </CloseOverlayBackground>
                <ImgOverlayTextContainer>
                  <ImgOverlayText>{ImagesType[openImage].alt}</ImgOverlayText>
                </ImgOverlayTextContainer>
              </OverlayBackgroundImgContainer>
            </OverlayBackground>
          )}
        </GalleryContainer>
      )}
    </>
  );
};

export default GalleryTypeComponent;
