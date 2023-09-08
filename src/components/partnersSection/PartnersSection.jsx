import React from "react";
import styled from "styled-components";
import Swash from "../../app/assets/partners/swash.svg";
import Lumerin from "../../app/assets/partners/lumerin.svg";
import Ccfound from "../../app/assets/partners/ccfound.svg";
import Unique from "../../app/assets/partners/unique.svg";
import Vabble from "../../app/assets/partners/vabble.svg";
import Parrot from "../../app/assets/partners/parrot.svg";
import S from "../../app/assets/partners/s.svg";
import Solrazr from "../../app/assets/partners/solrazr.svg";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > li {
    position: relative;
    height: 212px;
    margin-right: 52px;

    & > img {
      width: 173px;
    }
  }
`;

const Ellipse = styled.div`
  position: absolute;
  width: 212px;
  height: 132px;
  border-radius: 48%;
  background-color: rgba(44, 64, 108, 0.54);
  bottom: 50%;
  left: -10%;
  filter: blur(55px);
`;

const PartnersSection = () => {
  return (
    <>
      <Ul>
        <li>
          <Ellipse />
          <img src={Swash} alt="Swash" />
        </li>
        <li>
          <Ellipse />
          <img src={Lumerin} alt="Lumerin" />
        </li>
        <li>
          <Ellipse />
          <img src={Ccfound} alt="Ccfound" />
        </li>
        <li>
          <Ellipse />
          <img src={Unique} alt="Unique" />
        </li>
        <li>
          <Ellipse />
          <img src={Vabble} alt="Vabble" />
        </li>
        <li>
          <Ellipse />
          <img src={Parrot} alt="Parrot" />
        </li>
        <li>
          <Ellipse />
          <img src={S} alt="S" />
        </li>
        <li>
          <Ellipse />
          <img src={Solrazr} alt="Solrazr" />
        </li>
        <li>
          <Ellipse />
          <img src={Lumerin} alt="Lumerin" />
        </li>
      </Ul>
    </>
  );
};

export default PartnersSection;
