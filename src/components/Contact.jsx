import React from "react";
import { Section, H4, colors, H5 } from "../Utilities";
import styled from "styled-components";
import { GrMail } from "react-icons/gr";
import { ReverseButton } from "./../Utilities";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 12rem;
  padding-top: 0.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 10rem 2rem 2rem 5rem;
`;

const ContactOption = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 12rem;
  gap: 0.7rem;
  justify-content: center;
  align-items: center;
  border: solid 1px ${colors.olive};
  border-radius: 0.5rem;
  background-color: ${colors.olive};
  color: ${colors.nightblack};
  margin: 2rem;
  &:hover {
    background-color: transparent;
    color: ${colors.hampton};
  }
  &:active {
    opacity: 0.5;
  }
`;

const P1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

const P2 = styled.p`
  font-size: 0.7rem;
  text-align: center;
`;

const P3 = styled.a`
  font-size: 0.8rem;
  font-weight: 300;
  text-decoration: none;
  color: ${colors.brown};
  text-align: center;
  &:hover {
    color: ${colors.olive};
  }
  &:active {
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 350px;
  background-color: transparent;
  border: solid 1px ${colors.olive};
  border-radius: 0.7rem;
  color: ${colors.hampton};
  padding: 0.75rem 1.2rem;
  &:hover {
    border: solid 1px ${colors.hampton};
  }
  &:focus {
    border: solid 2px ${colors.red};
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 600px) {
  }
`;

const Textarea = styled.textarea`
  width: 350px;
  height: 100px;
  background-color: transparent;
  border: solid 1px ${colors.olive};
  border-radius: 0.7rem;
  color: ${colors.hampton};
  padding: 0.75rem 1.2rem;
  &:hover {
    border: solid 1px ${colors.hampton};
  }
  &:active {
    border: solid 2px ${colors.hampton};
  }
  @media (max-width: 1024px) {
    width: 250px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  width: max-content;
  gap: 1rem;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const Contact = () => {
  const emailForm = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n2k8erc",
        "template_uj4urzq",
        emailForm.current,
        "KkeBTvnfAIW3qd3P3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Section id="contact" style={{ height: "max-content" }}>
      <HeadingContainer>
        <FlexBox style={{ flexDirection: "row", gap: "0" }}>
          <H5 style={{ color: colors.olive }}>Get in touch!</H5>
          <H5 style={{ color: colors.hampton, transform: "translateX(-99%)" }}>
            Get in touch!
          </H5>
        </FlexBox>
        <H4>Contact Me.</H4>
      </HeadingContainer>
      <ContactContainer>
        <div>
          <ContactOption>
            <P1>
              <GrMail />
              Email
            </P1>
            <P2>nishachauhan0950@gmail.com</P2>
            <P3 href="mailto:nishachauhan0950@gmail.com">Send a message</P3>
          </ContactOption>
          {/* 
          <ContactOption>
            <P1>
              <RiWhatsappFill />
              WhatsApp
            </P1>
            <P2>+919138139980</P2>
            <P3 href="https://web.whatsapp.com/send?phone=+919138139980">
              Send a message
            </P3>
          </ContactOption> */}
        </div>

        <form action="" ref={emailForm} onSubmit={sendEmail}>
          <FlexBox>
            <Input type="text" name="name" placeholder="Your Full Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="your message"></Textarea>
            <ReverseButton type="submit">Send Message</ReverseButton>
          </FlexBox>
        </form>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
