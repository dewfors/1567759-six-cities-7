import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function CityList(props) {

  const {cityList, currentCity, onChangeCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cityList.map((cityItem) => (
            <li className="locations__item" key={`city-${cityItem}`}>
              <Link
                to={`/#${cityItem}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(cityItem);
                }}
                className={`locations__item-link tabs__item ${currentCity === cityItem && 'tabs__item--active'}`}
              >
                <span>{cityItem}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

CityList.propTypes = {
  cityList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CityList;
