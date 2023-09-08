import React from "react";
import styled from "styled-components";
import { linearColor } from "../../app/styles/colors";

const ButtonCustom = styled.button`
  background: transparent;
  height: ${(props) => props.height};
  //  // width: ${(props) => props.width};
  border: 2px solid
    ${(props) => (props.$linearGradiant ? linearColor[0] : "#fff")};
  border-radius: 12px;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  font-weight: ${(props) => (props.$linearGradiant ? "bold" : "normal")};
  font-size: 16px;
`;

const Button = ({
  children,
  type = "button",
  height = "60px",
  width = "235px",
  linearGradiant = false,
}) => {
  return (
    <ButtonCustom
      type={type}
      height={height}
      width={width}
      $linearGradiant={linearGradiant}
    >
      {children}
    </ButtonCustom>
  );
};

export default Button;
