import React from "react";
import PropTypes from "prop-types";

const Thumbnail = props => {
  return (
    <div className="thumbnail">
      <img className="thumbnail__img" src={props.img} alt="Thumbnail" />
      <span className="thumbnail__text">{props.text}</span>
    </div>
  );
};

Thumbnail.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string
};

export default Thumbnail;
