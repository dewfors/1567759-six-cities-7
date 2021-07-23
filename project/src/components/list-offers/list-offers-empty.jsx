import React from 'react';
import PropTypes from 'prop-types';

function ListOffersEmpty(props) {
  const {isError, currentCity} = props;


  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">
              {isError
                ? 'error loading data from server'
                : 'no offers available'}
            </b>
            <p className="cities__status-description">
              {isError
                ? 'try again later'
                : `there are no offers available at the moment in ${currentCity}`}
            </p>
          </div>
        </section>
        {isError || <div className="cities__right-section" />}
      </div>
    </div>
  );
}

ListOffersEmpty.propTypes = {
  currentCity: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default ListOffersEmpty;
