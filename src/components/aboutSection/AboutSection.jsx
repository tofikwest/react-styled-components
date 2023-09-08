import styled from "styled-components";
import { useEffect, useState } from "react";
import { acardionContentF, data } from "../../mock/AboutContent";

const Header2 = styled.h2`
  display: block;
  font-size: 36px;
`;
const Thumba = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
`;
const ContentBlock = styled.div`
  width: 504px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BtnLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;
const BtnRight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;
const Paragraph = styled.p`
  height: 400px;
`;

const PageRower = styled.div`
  text-align: center;
  & > span {
    margin-right: 10px;
`;

const dataLength = data.length;

const AboutSection = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState(() => acardionContentF(1));

  useEffect(() => {
    setContent(acardionContentF(page));
    document.getElementById("pageRow").children[page - 1].textContent = "🟩";

    for (let i = 0; i < dataLength; i++) {
      if (i === page - 1) continue;
      document.getElementById("pageRow").children[i].textContent = "▢";
    }
  }, [page]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Header2>About</Header2>
        <BtnLeft
          onClick={() => {
            setPage((prev) => (page === 1 ? 3 : page - 1));
          }}
        >
          ⬅️
        </BtnLeft>
        <BtnRight
          onClick={() => {
            setPage((prev) => (page === 3 ? 1 : page + 1));
          }}
        >
          ➡️
        </BtnRight>
        <Thumba key={content.id}>
          <img src={content.img} alt="about" />
          <ContentBlock>
            <h3>{content.title}</h3>
            <Paragraph>{content.text}</Paragraph>
          </ContentBlock>
        </Thumba>
        <PageRower id="pageRow">
          <span>▢</span>
          <span>▢</span>
          <span>▢</span>
        </PageRower>
      </div>
    </>
  );
};

export default AboutSection;
