import ContactInfoData from "./ContactInfoData/ContactInfoData";
import { ContactInfoCard, ContactInfoCards, Icon, Text, Title } from "./style";

const ContactInfo = () => {
  return (
    <ContactInfoCards>
      {ContactInfoData.map((card) => (
        <ContactInfoCard key={card.id}>
          <Icon>{card.icon}</Icon>
          <Title>{card.title}</Title>
          <Text>{card.text}</Text>
        </ContactInfoCard>
      ))}
    </ContactInfoCards>
  );
};

export default ContactInfo;
