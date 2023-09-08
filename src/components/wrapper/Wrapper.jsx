import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: 60px;
  margin-left: ${(props) => props.$marginleft};
`;

const Wrapper = ({
  marginLeft = "118px",
  marginTop = "120px",
  Component = <div>Component</div>,
}) => {
  return (
    <Section $marginleft={marginLeft} $marginTop={marginTop}>
      <Component />
    </Section>
  );
};

export default Wrapper;
