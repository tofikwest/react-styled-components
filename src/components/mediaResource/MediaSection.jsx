import React from "react";
import styled from "styled-components";

import twitter from "../../app/assets/mediaResource/twitter.svg";
import youtube from "../../app/assets/mediaResource/youtube.svg";
import telegram from "../../app/assets/mediaResource/telegram.svg";
import discord from "../../app/assets/mediaResource/discord.svg";

const Hedear2 = styled.h2`
  display: block;
  font-size: 36px;
  text-transform: uppercase;
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
  }
`;

const MediaSection = () => {
  return (
    <>
      <Hedear2>Media resources</Hedear2>
      <Ul>
        <li>
          <img src={twitter} alt="twitter" />
          <p>@Croccapital</p>
        </li>
        <li>
          <img src={youtube} alt="youtube" />
          <p>@Croccapital</p>
        </li>
        <li>
          <img src={telegram} alt="telegram" />
          <p>@Croccapital</p>
        </li>
        <li>
          <img src={discord} alt="discord" />
          <p>@Croccapital</p>
        </li>
      </Ul>
    </>
  );
};

export default MediaSection;
