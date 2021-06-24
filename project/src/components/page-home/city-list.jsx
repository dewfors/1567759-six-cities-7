import React from 'react';

function CityList(props) {

  const {cityList, currentCity, onChangeCity} = props;

  // console.log(currentCity);

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
  )

}

export default CityList;
