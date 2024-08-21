import { FaRegStar, FaStar } from "react-icons/fa6";
import img1 from "./../../../../assets/testimonials/testimonials-1.jpg";
import img2 from "./../../../../assets/testimonials/testimonials-2.jpg";
import img3 from "./../../../../assets/testimonials/testimonials-3.jpg";
import img4 from "./../../../../assets/testimonials/testimonials-4.jpg";
import img5 from "./../../../../assets/testimonials/testimonials-5.jpg";

const Data = [
  {
    id: 1,
    star: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint min",
    nameuser: "Sara Wilson",
    job: "Designer",
    img: img2,
  },
  {
    id: 2,
    star: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint min",
    nameuser: "Jena Karlis",
    job: "Store Owner",
    img: img3,
  },
  {
    id: 3,
    star: Array(5).fill(<FaStar />),
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint min",
    nameuser: "Matt Brandon",
    job: "Freelancer",
    img: img4,
  },
  {
    id: 4,
    star: Array(2)
      .fill(<FaStar />)
      .concat(Array(3).fill(<FaRegStar />)),
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint min",
    nameuser: "John Larson",
    job: "Entrepreuner",
    img: img5,
  },
  {
    id: 5,
    star: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint min",
    nameuser: "John Goodman",
    job: "Ceo & Founder",
    img: img1,
  },
];

export default Data;
