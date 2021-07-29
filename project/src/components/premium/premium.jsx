import React from "react";
import PropTypes from "prop-types";

function Premium(props) {
  if (props.isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
  return null;
}

Premium.propTypes = {
  isPremium: PropTypes.bool.isRequired,
};

export default Premium;
