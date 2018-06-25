import React from "react";
import PropTypes from "prop-types";
import Thumbnail from "./Thumbnail";

const SingleSlide = props => {
  return (
    <div className="slide">
      <img src={props.heroImg} className="slide__hero-image" alt="Hero" />
      <div className="slide__overlay">
        <Thumbnail img={props.prevSlide.image} text={props.prevSlide.text} />
        <Thumbnail img={props.detailImg} text={props.text} />
        <Thumbnail img={props.nextSlide.image} text={props.nextSlide.text} />
      </div>
    </div>
  );
};

SingleSlide.propTypes = {
  text: PropTypes.string,
  heroImg: PropTypes.string,
  detailImg: PropTypes.string,
  prevSlide: PropTypes.object,
  nextSlide: PropTypes.object
};

export default SingleSlide;
