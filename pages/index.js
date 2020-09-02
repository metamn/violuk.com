import React from "react";
import Head from "next/head";
import styled from "styled-components";

import Logo from "../src/components/Logo";
import Video from "../src/components/Video";
import Subscribe from "../src/components/Subscribe";

const Container = styled("section")((props) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  backgroundImage:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAEUlEQVQYlWNgGBrgP5F4+AAAuVIJ9yGdIxkAAAAASUVORK5CYII=)",
}));

const Home = () => {
  return (
    <Container>
      <Logo />
      <Video />
      <Subscribe />
    </Container>
  );
};

export default Home;
