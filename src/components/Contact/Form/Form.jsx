import { useState } from "react";
import { Button, FormContainer, Input, Textarea } from "./style";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    nameText: "",
    emailText: "",
    subjectText: "",
    textareaText: "",
  });

  const handleChangeForm = (e) => {
    const { value } = e.target;
    setForm({
      ...form,
      nameText: value,
      emailText: value,
      subjectText: value,
      textareaText: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/send-message", {
        form,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Houve um erro ao enviar dados", err);
      });
  };
  return (
    <FormContainer onSubmit={handleForm}>
      <Input
        type="text"
        value={form.nameText}
        placeholder="Your name"
        onChange={handleChangeForm}
      ></Input>
      <Input
        type="email"
        value={form.emailText}
        placeholder="Your Email"
        onChange={handleChangeForm}
      ></Input>
      <Input
        type="text"
        value={form.subjectText}
        placeholder="Subject"
        onChange={handleChangeForm}
      ></Input>
      <Textarea
        value={form.textareaText}
        placeholder="Message"
        onChange={handleChangeForm}
      ></Textarea>
      <Button>Send Message</Button>
    </FormContainer>
  );
};

export default Form;
