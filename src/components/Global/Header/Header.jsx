import {
  Bar,
  DropdownGallery,
  DropdownGalleryLinks,
  DropdownLink,
  DropdownText,
  Hamburguer,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoIcon,
  HeaderLogoText,
  HeaderNav,
  IconsNav,
  IconsNavItem,
  LinkPath,
} from "./style";
import { FiCamera } from "react-icons/fi";
import { HeaderData, IconsData } from "./HeaderData";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <HeaderContainer>
      <HeaderLogo href="/">
        <HeaderLogoIcon>
          <FiCamera />
        </HeaderLogoIcon>
        <HeaderLogoText>PhotoFolio</HeaderLogoText>
      </HeaderLogo>
      <HeaderNav openMenuProp={openMenu}>
        <LinkPath to="/">Home</LinkPath>
        <LinkPath to="/about">About</LinkPath>
        <DropdownLink>
          <DropdownText>Gallery</DropdownText>
          <DropdownGallery>
            {HeaderData.map((link) => (
              <DropdownGalleryLinks
                key={link.id}
                to={`/gallerytype/${link.link}`}
              >
                {link.link}
              </DropdownGalleryLinks>
            ))}
          </DropdownGallery>
        </DropdownLink>
        <LinkPath to="/services">Services</LinkPath>
        <LinkPath to="/contact">Contact</LinkPath>
      </HeaderNav>
      <IconsNav>
        {IconsData.map((icon) => (
          <IconsNavItem key={icon.id}>{icon.icon}</IconsNavItem>
        ))}
        <Hamburguer onClick={handleMenu}>
          <Bar openMenuProp={openMenu}></Bar>
          <Bar openMenuProp={openMenu}></Bar>
          <Bar openMenuProp={openMenu}></Bar>
        </Hamburguer>
      </IconsNav>
    </HeaderContainer>
  );
};

export default Header;
