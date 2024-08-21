import Global from "./../Global/Global";
import Header from "./../Global/Header/Header";
import Title from "./../Global/HeaderTitle/HeaderTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <>
      <Global />
      <Header />
      <Title
        title="Contact"
        text="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
      />
      <ContactInfo />
      <Form />
    </>
  );
};

export default Contact;
