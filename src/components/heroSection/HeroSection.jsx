import React from "react";
import Button from "../button/button";
import styled from "styled-components";

const Header1 = styled.h1`
  font-size: 44px;
  line-height: 110%;
  width: 742px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;
const Thumba = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 966px;
`;

const Paragraph = styled.p`
  width: 400px;
  opacity: 0.7;
  line-height: 170%;
`;

const Ul = styled.ul`
  width: 44%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroSection = () => {
  return (
    <>
      <Header1>
        croc capital is a crypto fund. Investments and support for projects
      </Header1>
      <Thumba>
        <Paragraph>
          We provide financial, technical, consulting and informational support
          to IT projects at an early stage
        </Paragraph>
        <Ul>
          <li>
            <Button linearGradiant={true}>submit your project</Button>
          </li>
          <li>
            <Button>upcoming ido's</Button>
          </li>
        </Ul>
      </Thumba>
    </>
  );
};

export default HeroSection;
