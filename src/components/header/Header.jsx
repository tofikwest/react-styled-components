import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../app/assets/logo.svg";

import Twitter from "../../app/assets/twitter.svg";
import Youtube from "../../app/assets/youtube.svg";
import Telegram from "../../app/assets/telegram.svg";
import Discord from "../../app/assets/discord.svg";
import Button from "../button/button";

const HeaderBlock = styled.header`
  height: 100%;
  padding-top: 61px;
  background: transparent;
  margin-left: ${(props) => props.$marginleft};
  margin-bottom: ${(props) => props.$marginbottom};
  width: 967px;
  color: #ffffff;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      margin: 0 1rem;
    }
  }

  ul:last-child {
    li {
      margin: 0;
      margin-right: 18px;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SVG_Burger = styled(RxHamburgerMenu)`
  margin-right: 42px;
  cursor: pointer;
`;

const Header = ({ marginLeft = "118px", marginBottom = "328px" }) => {
  return (
    <HeaderBlock $marginleft={marginLeft} $marginbottom={marginBottom}>
      <Nav>
        <Div>
          <SVG_Burger />
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </Div>
        <ul>
          <li>
            <a href="twitter">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="youtube">
              <img src={Youtube} alt="youtube" />
            </a>
          </li>
          <li>
            <a href="telegram">
              <img src={Telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a href="discord">
              <img src={Discord} alt="discord" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Button height="40px" width="100px">
              Sign Up
            </Button>
          </li>
          <li>
            <Button height="40px" width="100px">
              Sign In
            </Button>
          </li>
        </ul>
      </Nav>
    </HeaderBlock>
  );
};

export default Header;
