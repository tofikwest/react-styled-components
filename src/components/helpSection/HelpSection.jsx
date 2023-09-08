import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  // justify-content: space-between;
`;
const Header2 = styled.h2`
  font-size: 36px;
  width: 238px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 150px;
`;
const ThumbaList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  & > ul:last-child {
    margin-left: 50px;
    margin-top: 50px;
  }
`;

const Ul = styled.ul`
  // width: 44%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > li {
    position: relative;
    border: 1px solid #8b3375;
    border-radius: 10px;
    padding: 10px;

    width: 400px;
    height: 186px;
    margin-bottom: 20px;

    & > span {
      position: absolute;
      top: 4px;
      right: 14px;
      opacity: 0.5;
    }

    & > p {
      font-size: 28px;
      font-weight: bold;
      text-transform: uppercase;
      background: linear-gradient(to bottom, red, blue);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
`;

const HelpSection = () => {
  return (
    <MainWrapper>
      <Header2>How we can help you</Header2>
      <ThumbaList>
        <Ul>
          <li>
            <span>01</span>
            <p>Marketing support</p>
          </li>
          <li>
            <span>02</span>
            <p>Technical support</p>
          </li>
        </Ul>
        <Ul>
          <li>
            <span>03</span>
            <p>Fundrising. Enter to VC and KOLs.</p>
          </li>
          <li>
            <span>04</span>
            <p>legal support</p>
          </li>
        </Ul>
      </ThumbaList>
    </MainWrapper>
  );
};

export default HelpSection;
