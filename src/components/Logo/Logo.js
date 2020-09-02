import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {
  url: PropTypes.string,
};

/**
 * Defines the default props
 */
const defaultProps = {
  url: "/violuk_logo300_gr.png",
};

/**
 * Styles the component container
 */
const Container = styled("figure")((props) => ({}));

/**
 * Displays the component
 */
const Logo = (props) => {
  const { url } = props;

  return (
    <Container className="Logo">
      <img src={url} alt="Violuk" />
    </Container>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
export { propTypes as LogoPropTypes, defaultProps as LogoDefaultProps };
