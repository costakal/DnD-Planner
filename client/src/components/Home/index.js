import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import banner from "../../assets/bg.jpg";
import map from "../../assets/map.jpg";
import camp1 from "../../assets/screenshots/campaign.png";
import camp2 from "../../assets/screenshots/drag.png";
import combat1 from "../../assets/screenshots/combat.png";
import combat2 from "../../assets/screenshots/statblock.png";
import enc1 from "../../assets/screenshots/addEncounter.png";
import enc2 from "../../assets/screenshots/encounters.png";

const Home = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>
          <Greeting>The Ultimate Dungeon Masters Campaign Planner</Greeting>
          <SubGreeting>Supports 5e - Sign in and try it now!</SubGreeting>
        </Heading>
        <Features>
          <Campaign>
            <ImageContainer>
              <img src={camp1} />
              <img src={camp2} />
            </ImageContainer>
            <div>
              <h2>Keep track of and build your very own Campaign</h2>
              <h3>Re-arrange and reorganize your timelines as you see fit!</h3>
            </div>
          </Campaign>
          <Combat>
            <div>
              <h2>Run all your combat encounters in one place!</h2>
              <h3>
                See full monster stat blocks, keep track of initiative, roll
                dice and much more!
              </h3>
            </div>
            <ImageContainer>
              <img src={combat1} />
              <img src={combat2} />
            </ImageContainer>
          </Combat>
          <Encounter>
            <ImageContainer>
              <img src={enc2} />
              <img src={enc1} />
            </ImageContainer>
            <div>
              <h2>Save Encounters for later!</h2>
              <h3>
                Keep your ideas ready and organized for later use so you can
                jump right into any combat
              </h3>
            </div>
          </Encounter>
        </Features>
        <Footer>
          <a href="/">Contact</a>
          <a href="/">All Rights Reserved ©</a>
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 50px 0px;
  max-height: 93vh;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
    transition: 0.2s;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Greeting = styled.h2`
  color: white;
  font-size: 3em;
  padding: 0px 0px 10px;
`;

const SubGreeting = styled.h3`
  font-size: 2em;
  color: white;
`;

const Features = styled.div``;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 100px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
  img {
    border: solid 4px ${COLORS.primary};
    padding: 10px;
    margin: 15px 50px;
    max-width: 500px;
    max-height: 250px;
    box-shadow: 10px 10px 22px 0px rgba(0, 0, 0, 0.75);
  }
`;

const Campaign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.8);
  div {
    h2 {
      color: ${COLORS.primary};
      font-size: 40px;
      padding: 0px 40px 15px 0px;
    }
    h3 {
      font-style: italic;
      color: black;
      font-size: 26px;
      padding-right: 40px;
    }
  }
`;
const Combat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  div {
    h2 {
      color: white;
      font-size: 40px;
      padding: 0px 0px 15px 40px;
    }
    h3 {
      font-style: italic;
      color: white;
      font-size: 26px;
      padding-left: 40px;
    }
  }
`;

const Encounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(150, 150, 150);
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)),
    url(${map});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  div {
    h2 {
      color: ${COLORS.primary};
      font-size: 40px;
      padding: 0px 40px 15px 0px;
    }
    h3 {
      font-style: italic;
      color: white;
      font-size: 26px;
      padding-right: 40px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  height: 60px;
  width: 100vw;
  a {
    padding: 0px 50px;
    color: white;
    text-decoration: none;
  }
`;
