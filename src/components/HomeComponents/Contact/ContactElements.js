import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #ffdb0e;
  width: 100%;
  margin-top: -6vw;
  padding-bottom: 6vw;
  height: auto;
`;

export const ContactH2 = styled.h2`
  color: black;
  font-family: Banshee;
  font-style: normal;
  font-weight: normal;
  font-size: 7vw;
  line-height: 7.5vw;
  text-align: right;
  padding-top: 7vw;
  margin-right: 26vw;

  @media screen and (min-width: 768px) {
    font-size: 5vw;
    line-height: 5.5vw;
    margin-left: 3.5vw;
    padding-top: 5vw;
    padding-bottom: 7vw;
  }
`;

export const ContactImage = styled.img`
  width: 30%;
  height: 30%;
  margin-left: 8vw;
  margin-top: -16vw;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50%;
    margin-left: 1vw;
    margin-top: -20vw;
  }
`;

export const ContactFormContainer = styled.div`
  background-color: black;
  width: 70vw;
  height: 40vw;
  margin-left: 25vw;
  margin-top: -10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 21.3vw;
    width: 45vw;
    margin-top: -21.5vw;
    margin-left: 50vw;
    justify-content: start;
  }
`;

export const ContactForm = styled.form`
  height: 30vw;
  width: 60vw;

  @media screen and (min-width: 768px) {
    height: 15vw;
    width: 40vw;
    margin-top: 1vw;
  }
`;

export const EmailInput = styled.input`
  width: 70%;
  margin-left: 12vw;
  margin-bottom: 1vw;
  border-radius: 5px;
  font-family: Baloo Tamma 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
    border: 2.4px solid black;
    -webkit-box-shadow: 2px 5px 13px -5px #ffdb0e;
    box-shadow: 2px 5px 13px -5px #ffdb0e;
  }

  @media screen and (min-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const MessageInput = styled.textarea`
  width: 90%;
  height: 60%;
  border-radius: 8px;
  font-family: Baloo Tamma 2;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
    border: 2.4px solid black;
    -webkit-box-shadow: 2px 5px 13px -5px #ffdb0e;
    box-shadow: 2px 5px 13px -5px #ffdb0e;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  white-space: nowrap;
  padding: 5px 20px;
  background-color: #fb7b00;
  color: #fff;
  border-radius: 8px;
  border: 1px solid #fb7b00;
  font-family: BalooTamma2-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  text-decoration: none;
  float: right;
  margin-top: 2vw;
  margin-right: 4vw;
  width: auto;

  &:focus {
    outline: none;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #fb7b00;
    color: #fb7b00;
  }

  @media screen and (min-width: 768px) {
    width: 14vw;
    font-size: 16px;
    line-height: 28px;
    margin-right: 0;
    margin-top: 0.5vw;
  }
`;
