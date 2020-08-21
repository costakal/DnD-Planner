import React, { useEffect, useState } from "react";
import styled from "styled-components";

import banner from "../../assets/bg.jpg";

const Home = () => {
  const [monsters, setMonsters] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/monsters")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMonsters(data);
      });
  }, []);

  return (
    <>
      <Hero>
        <HeroContent>
          <Heading>
            <Greeting>The Ultimate Dungeon Masters Campaign Planner</Greeting>
            <SubGreeting>Supports 5e - Sign in and try it now!</SubGreeting>
          </Heading>
        </HeroContent>
      </Hero>
    </>
  );
};

export default Home;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 20px;
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Greeting = styled.h2`
  font-size: 3em;
`;

const SubGreeting = styled.h3`
  font-size: 2em;
`;
