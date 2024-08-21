import GalleryData from "./GalleryData";
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

const Gallery = () => {
  const [openImage, setOpenImage] = useState(null);

  const handleOpenImg = (index) => {
    setOpenImage(index);
  };

  const closeOverlay = () => {
    setOpenImage(null);
  };
  return (
    <GalleryContainer>
      {GalleryData.map((img, index) => (
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
              src={GalleryData[openImage].img}
            ></OverlayBackgroundImg>
            <CloseOverlayBackground onClick={closeOverlay}>
              <FaXmark />
            </CloseOverlayBackground>
            <ImgOverlayTextContainer>
              <ImgOverlayText>{GalleryData[openImage].alt}</ImgOverlayText>
            </ImgOverlayTextContainer>
          </OverlayBackgroundImgContainer>
        </OverlayBackground>
      )}
    </GalleryContainer>
  );
};

export default Gallery;
