import React from "react";
import styled from "styled-components";
import Button from "../button/button";

const Hedear2 = styled.h2`
  display: block;
  font-size: 36px;
  text-transform: uppercase;
`;

const Form = styled.form`
  & > input:first-child {
    margin-right: 120px;
  }
  & > button {
    margin-left: 45%;
  }
`;
const Input = styled.input`
  width: 45%;
  border: none;
  border-bottom: 2px solid #232323;
  background: transparent;
  padding: 0 0 10px 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  background: transparent;
  border: none;
  border-bottom: 2px solid #232323;
  margin-top: 91px;
  margin-bottom: 91px;
`;

const ContactUs = () => {
  return (
    <>
      <Hedear2>contact us</Hedear2>

      <Form action="/" method="post">
        <Input type="text" id="name" name="name" placeholder="Your name" />

        <Input type="email" id="email" name="email" placeholder="Your e-mail" />

        <TextArea
          id="message"
          name="message"
          placeholder="Your message"
        ></TextArea>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default ContactUs;
