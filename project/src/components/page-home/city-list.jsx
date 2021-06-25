import React from 'react';
import PropTypes from 'prop-types';

function CityList(props) {

  const {cityList, currentCity, onChangeCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">

          {cityList.map((cityItem) => (
            <li className="locations__item" key={`city-${cityItem}`}>
              <a
                href={`#${cityItem}`}
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeCity(cityItem);
                }}
                className={`locations__item-link tabs__item ${currentCity === cityItem && 'tabs__item--active'}`}
              >
                <span>{cityItem}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

CityList.propTypes = {
  cityList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      coords: PropTypes.arrayOf(
        PropTypes.number.isRequired,
      ).isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CityList;
