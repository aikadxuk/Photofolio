import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  position: relative;

  @media (width <= 430px) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  font-size: 2rem;
`;

export const HeaderLogoIcon = styled.i`
  color: var(--green);
  display: flex;
  align-items: center;
`;

export const HeaderLogoText = styled.span`
  font-family: var(--cardo-font);
  font-size: 1.9rem;
  color: var(--white);
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  transition: 0.5s;

  @media (width <= 760px) {
    gap: 30px;
    position: fixed;
    flex-direction: column;
    left: ${({ openMenuProp }) => (openMenuProp ? "0%" : "-100%")};
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: var(--light-black);
    width: 50%;
    top: 0;
    z-index: 10;
  }
`;

export const LinkPath = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray);

  &:hover {
    color: var(--white);
  }
`;

export const DropdownText = styled.p`
  color: var(--gray);
  text-transform: uppercase;
  position: relative;
`;

const DropdownAnimation = keyframes`
  0%{
    top: 40px;
    opacity: .2;
  }
  100%{
    top: 20px;
    opacity: 1;
  }
`;

const DropdownAnimationMobile = keyframes`
  0%{
    left: 100px;
    opacity: .2;
  }
  100%{
    left: 0px;
    opacity: 1;
  }
`;

export const DropdownGallery = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  background-color: var(--light-black);
  width: 150px;

  @media (width <= 760px) {
    background-color: var(--gray);
  }
`;

export const DropdownGalleryLinks = styled(Link)`
  color: var(--gray);
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: var(--white);
    background-color: var(--gray);
  }

  @media (width <= 760px) {
    color: var(--light-gray);

    &:hover {
      color: var(--white);
      background-color: var(--light-black);
    }
  }
`;

export const DropdownLink = styled.div`
  position: relative;

  &:hover ${DropdownGallery} {
    display: flex;
    animation: ${DropdownAnimation} 0.7s;
  }

  @media (width <= 760px) {
    &:hover ${DropdownGallery} {
      display: flex;
      animation: ${DropdownAnimationMobile} 0.7s;
    }
  }
`;

export const IconsNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const IconsNavItem = styled.i`
  color: var(--gray);

  &:hover {
    color: var(--white);
  }
`;

export const Hamburguer = styled.div`
  width: 40px;
  height: 50px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  cursor: pointer;

  @media (width <= 760px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  width: 40px;
  height: 3px;
  background-color: var(--gray);
  transition: 0.5s;

  &:nth-child(1) {
    position: ${({ openMenuProp }) => (openMenuProp ? "absolute" : "static")};
    transform: ${({ openMenuProp }) =>
      openMenuProp ? "rotate(45deg)" : "rotate(0deg)"};
  }
  &:nth-child(2) {
    position: ${({ openMenuProp }) => (openMenuProp ? "absolute" : "static")};
    width: ${({ openMenuProp }) => (openMenuProp ? "0" : "40px")};
  }
  &:nth-child(3) {
    position: ${({ openMenuProp }) => (openMenuProp ? "absolute" : "static")};
    transform: ${({ openMenuProp }) =>
      openMenuProp ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;
