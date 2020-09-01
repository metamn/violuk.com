import React from "react";
import Head from "next/head";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEUlEQVQYlWNgGBrgP5F4+AAAuVIJ9yGdIxkAAAAASUVORK5CYII=);
`;

const Image = styled.section`
  position: absolute;
  mix-blend-mode: luminosity;
`;

const Subscribe = styled.section`
  position: absolute;
  bottom: 1em;
  display: flex;
  flex-direction: column;
`;

const Text = styled.h3`
  font-family: monospace;
  letter-spacing: 1.5px;
  background: black;
  color: white;
`;

const Mailchimp = styled.section``;

const Input = styled.div``;

const Button = styled.button`
  border: 1px solid;
  background: white;
  padding: 1em;

  font-family: monospace;
  letter-spacing: 1.5px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Container>
      <Image>
        <img src="/violuk_logo300_gr.png" alt="Violuk" />
      </Image>
      <ReactPlayer
        url="https://vimeo.com/360846945"
        playing={true}
        volume={0.5}
        muted={true}
        controls={true}
        width="100vw"
        height="100vh"
      />
      <Subscribe>
        <Text>coming soon ...</Text>
        <Mailchimp>
          <Text>enter your e-mail address:</Text>
          <Button>get notified</Button>
        </Mailchimp>
      </Subscribe>
    </Container>
  );
};

export default Home;
