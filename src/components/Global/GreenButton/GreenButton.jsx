import { Link } from "react-router-dom";
import styled from "styled-components";

const GreenButton = ({ text }) => {
  const Button = styled.button`
    background: var(--green);
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
  `;

  const LinkPath = styled(Link)`
    color: var(--white);
    text-transform: uppercase;
    text-decoration: none;
  `;

  return (
    <Button>
      <LinkPath href="/contact">{text}</LinkPath>
    </Button>
  );
};

export default GreenButton;
