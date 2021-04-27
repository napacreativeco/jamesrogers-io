import React from 'react'
import ContactForm from './ContactForm.js'
import styled from 'styled-components'

const ContactSection = styled.section`
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;
const ContactFormStyles = styled.div`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 40px 20%;
  padding: 60px 80px;
  @media only screen and (max-width: 768px) {
    margin: 40px 3%;
    padding: 20px 20px;
  }
  border-radius: 20px;
  label {
    color: #666666;
  }
  input {
    margin: 0px 0px 15px 0px;
  }
  input, textarea {
    width: 100%;
    background: transparent;
    padding: 10px;
    outline: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 2px solid #484848;
    border-left: 0;
    border-radius: 0px;
  }
  textarea {
    min-width: 100%;
    min-height: 120px;
    border-radius: 0px;
    margin-bottom: 30px;
  }
  button {
    font-family: var(--title);
    font-weight: 600;
    background: transparent;
    padding: 0px;
    border: 0;
    font-size: 1.2rem;
    margin-top: 20px;
  }
`;
const Headline = styled.h1`
  font-size: 2rem;
  font-family: var(--title);
  margin-bottom: 20px;
`;
const Description = styled.p`
  font-family: var(--body);
  margin-bottom: 40px;
`;

export default function ContactBlock() {

  return (
    <ContactSection id="contact">
      <ContactFormStyles>
        <Headline>
          Contact Me
        </Headline>
        <Description>
          Good news! I am accepting projects and new opportunities. Reach out using the using the form below and I'll get back to you shortly!
        </Description>

        <ContactForm />

      </ContactFormStyles>
    </ContactSection>
  )
}
