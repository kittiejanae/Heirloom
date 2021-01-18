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

function Contact() {
  function resetForm() {
    let email = document.querySelector(".emailInput");
    let message = document.querySelector(".messageInput");

    email.value = "";
    message.value = "";
    // let resetForm = document.querySelector("button");
    // let inputs = document.querySelectorAll("inputs");

    // resetForm.addEventListener("click", () => {
    //   inputs.forEach((input) => (input.value = ""));
    // });
  }

  function onSubmit(event) {
    event.preventDefault();

    let outputStr = `Thanks for your message!`;
    alert(outputStr);

    resetForm();
  }

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
              name="email"
              placeholder=" Email Address"
              required
            />
            <MessageInput
              className="messageInput"
              type="text"
              name="message"
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
}

export default Contact;
