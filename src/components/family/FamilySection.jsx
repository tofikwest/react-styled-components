import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import FamilyImg from "../../app/assets/family/family.svg";

const Hedear2 = styled.h2`
  display: block;
  font-size: 36px;
  width: 238px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 140%;

  margin-bottom: 35px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Paragraph = styled.p`
  width: 503px;
  opacity: 0.7;
  margin-bottom: 35px;
`;

const FamilySection = () => {
  return (
    <Wrapper>
      <div>
        <Hedear2>Welcome to our family</Hedear2>
        <Paragraph>
          Everyday we are looking for people, who have futurist mindest. If you
          are one of them, you’re welcome.
        </Paragraph>
        <Button>Contact us</Button>
      </div>

      <div>
        <img src={FamilyImg} alt="family" />
      </div>
    </Wrapper>
  );
};

export default FamilySection;
