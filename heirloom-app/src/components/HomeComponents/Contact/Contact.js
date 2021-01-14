import React from "react";
import {
  ContactContainer,
  ContactH2,
  ContactImage,
  ContactFormContainer,
  ContactForm,
  EmailInput,
  MessageInput,
  SubmitButton,
} from "./ContactElements";
import contact from "../../../images/contact.svg";

const emailInfo = document.getElementsByClassName("emailInput");
const messageInfo = document.getElementsByClassName("messageInput");

function onSubmit(event) {
  event.preventDefault();

  let outputStr = `Thanks for your message!`;
  alert(outputStr);

  emailInfo.reset();
  messageInfo.reset();
}

const Contact = () => {
  return (
    <>
      <ContactContainer className="contact">
        <ContactH2>Contact Us</ContactH2>
        <ContactImage src={contact} type="image/svg" />
        <ContactFormContainer>
          <ContactForm>
            <EmailInput
              className="emailInput"
              type="text"
              placeholder=" Email Address"
              required
            />
            <MessageInput
              className="messageInput"
              type="text"
              placeholder=" Write Your Message Here"
              required
            />
            <SubmitButton type="submit" onClick={onSubmit}>
              Submit
            </SubmitButton>
          </ContactForm>
        </ContactFormContainer>
      </ContactContainer>
    </>
  );
};

export default Contact;
