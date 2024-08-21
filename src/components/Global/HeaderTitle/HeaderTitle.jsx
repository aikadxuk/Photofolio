import { useLocation } from "react-router-dom";
import { TitleContainer, TitleParagraph, TitleText, GreenName } from "./style";
import GreenButton from "./../GreenButton/GreenButton";

const HeaderTitle = ({ title, text }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  if (isHome) {
    return (
      <TitleContainer>
        <TitleText isHome>
          I&apos;m <GreenName>Jenny Wilson</GreenName> a Professional
          Photographer from New York City
        </TitleText>
        <TitleParagraph>
          Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem
          magni est deserunt sed qui libero. Qui voluptas amet
        </TitleParagraph>
        <GreenButton text="Available for hire" />
      </TitleContainer>
    );
  }

  if (isAbout) {
    return (
      <TitleContainer>
        <TitleText>{title}</TitleText>
        <TitleParagraph>{text}</TitleParagraph>
      </TitleContainer>
    );
  }

  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <TitleParagraph>{text}</TitleParagraph>
      <GreenButton text="Available for hire" />
    </TitleContainer>
  );
};

export default HeaderTitle;
