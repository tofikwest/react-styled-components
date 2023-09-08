import React from "react";
import Button from "../button/button";
import styled from "styled-components";
import { teamMembers } from "../../mock/team";
import twitter from "../../app/assets/twitter.svg";
import youtube from "../../app/assets/youtube.svg";
import telegram from "../../app/assets/telegram.svg";

import { BiSolidQuoteLeft } from "react-icons/bi";

const Header2 = styled.h2`
  display: block;
  font-size: 36px;
  width: 238px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 150px;
`;

// styling BiSolidQuoteLeft
const BiSolidQuoteLeftStyled = styled(BiSolidQuoteLeft)`
  display: block;
  color: pink;
  margin-bottom: 10px;
`;

const Quote = styled.span`
  width: 234px;
  font-size: 14px;
  position: absolute;
  height: 100%;
  top: 61px;
  left: 84px;
  opacity: 0;
  z-index: 2;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s ease-in-out;
  }
`;

const BlurEffect = styled.div`
  width: 100%;
  background: inherit;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > li:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  & > li {
    cursor: pointer;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    padding-bottom: 20px;
    width: 307px;
    height: 351px;
    // margin-right: 10px;

    & > span:first-child {
      opacity: 0.7;
    }

    & > p {
      font-size: 24px;
    }
    & > ul {
      margin-top: 8px;
      display: flex;
      width: 30%;
      justify-content: space-between;
    }

    & > img {
      width: 250px;
    }
  }
`;
const team = teamMembers.map((member) => {
  return (
    <li key={member.id}>
      <img src={member.imgComponent} alt={member.name} />
      <p>{member.name}</p>
      <span>{member.position}</span>
      <ul>
        <li>
          <a href={member.socialMedia.telegram}>
            <img src={telegram} alt="telegram" />
          </a>
        </li>
        <li>
          <a href={member.socialMedia.twitter}>
            <img src={twitter} alt="twitter" />
          </a>
        </li>

        <li>
          <a href={member.socialMedia.youtube}>
            <img src={youtube} alt="youtube" />
          </a>
        </li>
      </ul>

      <BlurEffect />
      <Quote>
        <BiSolidQuoteLeftStyled />
        {member.quote}
      </Quote>
    </li>
  );
});

const TeamSection = () => {
  return (
    <>
      <Header2>Team</Header2>
      <Ul>{team}</Ul>
    </>
  );
};

export default TeamSection;
