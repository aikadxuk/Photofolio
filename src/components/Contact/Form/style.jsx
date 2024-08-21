import styled from "styled-components";

export const FormContainer = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-template-areas:
    "name email"
    "subject subject"
    "textarea textarea"
    "button button";
  padding: 20px 7%;
  justify-content: center;
`;

export const Input = styled.input`
  background: var(--light-black);
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: var(--green);

  &::placeholder {
    color: var(--white);
    font-size: 0.9rem;
  }

  &:focus {
    color: var(--white);
    outline: none;
    border: 1px solid var(--white);
    font-size: 0.9rem;
  }

  &:nth-child(1) {
    grid-area: name;
  }
  &:nth-child(2) {
    grid-area: email;
  }
  &:nth-child(3) {
    grid-area: subject;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  background: var(--light-black);
  padding: 10px 20px;
  grid-area: textarea;
  border-radius: 5px;
  height: 150px;
  color: var(--green);
  border: none;
  font-family: var(--inter-font);

  &::placeholder {
    color: var(--white);
    font-size: 0.9rem;
    color: var(--white);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--white);
  }
`;

export const Button = styled.button`
  background: var(--green);
  border: none;
  color: var(--white);
  padding: 10px 25px;
  border-radius: 5px;
  grid-area: button;
  margin: auto;
`;
