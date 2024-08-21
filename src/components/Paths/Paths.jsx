import { createBrowserRouter } from "react-router-dom";
import Animation from "./../Global/OpeningAnimation/Opening";
import App from "./../../App";
import GalleryType from "../GalleryType/GalleryType";
import About from "../About/About";
import Services from "./../Services/Services";
import Contact from "./../Contact/Contact";

// Envolva os componentes de página com o HOC de animação
const AppWithAnimation = Animation(App);
const GalleryTypeWithAnimation = Animation(GalleryType);
const AboutWithAnimation = Animation(About);
const ServicesWithAnimation = Animation(Services);
const ContactWithAnimation = Animation(Contact);

const Paths = createBrowserRouter([
  { path: "/", element: <AppWithAnimation /> },
  { path: "/gallerytype/:type", element: <GalleryTypeWithAnimation /> },
  { path: "/about", element: <AboutWithAnimation /> },
  { path: "/services", element: <ServicesWithAnimation /> },
  { path: "/contact", element: <ContactWithAnimation /> },
]);

export default Paths;
