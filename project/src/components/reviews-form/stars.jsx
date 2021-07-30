import React from "react";
import {FormReviewKeyType} from "../../utils/const";
import PropTypes from "prop-types";

function Stars(props) {
  const {starsList, onChangeData} = props;

  return (
    starsList.map((item) => (
      <React.Fragment key={item.id}>
        <input  className="form__rating-input visually-hidden" name="rating" value={`${item.id}`} id={`${item.id}-stars`} type="radio"
                onChange={() => onChangeData(FormReviewKeyType.STARS, item.id)}
        />
        <label htmlFor={`${item.id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"> </use>
          </svg>
        </label>
      </React.Fragment>
    ))
  );
}

Stars.propTypes = {
  starsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  onChangeData: PropTypes.func.isRequired,
};

export default Stars;
