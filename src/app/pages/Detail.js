import React from "react";
import Styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/bao.png" alt="" />
      </Background>
      <ImageTitle>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 - 7m - Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Libero mollitia earum, nam assumenda
        possimus veritatis quaerat unde neque expedita provident rem? Vel amet
        maiores reprehenderit quibusdam tempore est tempora dolores!
      </Description>
    </Container>
  );
}

export default Detail;

const Container = Styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = Styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = Styled.div`
display: flex;
align-items: center;
`;

const PlayButton = Styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198)
  }
`;
const TrailerButton = Styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;
const AddButton = Styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = Styled(AddButton)`
  background-color: rgba(0, 0, 0)
`;

const SubTitle = Styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-heigh: 20px;
margin-top: 26px;
`;
const Description = Styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 600px;
`;
