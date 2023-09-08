import React from "react";
import styled from "styled-components";
import Logo from "../../app/assets/logo.svg";
import Twitter from "../../app/assets/twitter.svg";
import Youtube from "../../app/assets/youtube.svg";
import Telegram from "../../app/assets/telegram.svg";
import Discord from "../../app/assets/discord.svg";

const Hedear3 = styled.h3`
  display: block;
  font-size: 14px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  & > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
`;

const SocialMedias = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  width: 155px;
`;

const Paragraph = styled.p`
  opacity: 0.7;
  width: 230px;
`;

const FooterSection = () => {
  return (
    <>
      <Ul>
        <li>
          <nav>
            <img src={Logo} alt="logo" />
            <Paragraph>
              © Croc Capital, LLC, 2022. All Rights Reserved. Terms of Service
            </Paragraph>
          </nav>
        </li>
        <li>
          <nav>
            <Hedear3>Our products</Hedear3>
            <Paragraph>
              Launchpad CrocPad Stock analysis software Quantitative analysis.
              Mashine Learning. Croc Ventures IDO IPO, pre-IPO
            </Paragraph>
          </nav>
        </li>
        <li>
          <nav>
            <Hedear3>Information</Hedear3>
            <ul>
              <li>Jobs</li>
              <li>Cooperation</li>
              <li>News</li>
              <li>Contact us</li>
            </ul>
          </nav>
        </li>
        <li>
          <nav>
            <Hedear3>Our socials</Hedear3>
            <SocialMedias>
              <li>
                <img src={Twitter} alt="twitter" />
              </li>
              <li>
                <img src={Youtube} alt="youtube" />
              </li>
              <li>
                <img src={Telegram} alt="telegram" />
              </li>
              <li>
                <img src={Discord} alt="discord" />
              </li>
            </SocialMedias>
            <Paragraph>+3801235422</Paragraph>
          </nav>
        </li>
      </Ul>
    </>
  );
};

export default FooterSection;
