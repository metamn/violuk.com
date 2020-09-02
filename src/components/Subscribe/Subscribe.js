import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")((props) => ({}));

const Text = styled("p")((props) => ({
  fontFamily: "monospace",
  letterSpacing: "1.5px",
  background: "black",
  color: "white",
}));

const Button = styled("button")((props) => ({
  border: "1px solid",
  padding: "1em",
  cursor: "pointer",

  fontFamily: "monospace",
  letterSpacing: "1.5px",
  background: "white",
}));

/**
 * Displays the component
 */
const Subscribe = (props) => {
  return (
    <Container className="Subscribe">
      <Text>coming soon ...</Text>
      <>
        <Text>enter your e-mail address:</Text>
        <Button>get notified</Button>
      </>
    </Container>
  );
};

Subscribe.propTypes = propTypes;
Subscribe.defaultProps = defaultProps;

export default Subscribe;
export {
  propTypes as SubscribePropTypes,
  defaultProps as SubscribeDefaultProps,
};
