import React from "react";
import Head from "next/head";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Container>
      <ReactPlayer
        url="https://vimeo.com/360846945"
        playing={true}
        width="100vw"
        height="100vh"
      />
    </Container>
  );
};

export default Home;
