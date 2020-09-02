import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player";

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

/**
 * Displays the component
 */
const Video = (props) => {
  return (
    <Container className="Video">
      <ReactPlayer
        url="https://vimeo.com/360846945"
        playing={true}
        volume={0.5}
        muted={true}
        controls={true}
        width="100vw"
        height="100vh"
      />
    </Container>
  );
};

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
export { propTypes as VideoPropTypes, defaultProps as VideoDefaultProps };
