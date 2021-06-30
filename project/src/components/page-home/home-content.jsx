import React from 'react';
import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers';
import Map from '../map/map';
import placeCardProp from '../place-card/place-card.prop';
import SortOffers from '../sort-offers/sort-offers';

function HomeContent(props) {
  const {placesToStay, offers, currentCity} = props;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesToStay} places to stay in {currentCity}</b>

          <SortOffers />
          {/*<form className="places__sorting" action="#" method="get">*/}
          {/*  <span className="places__sorting-caption">Sort by</span>*/}
          {/*  <span className="places__sorting-type" tabIndex="0">*/}
          {/*    Popular*/}
          {/*    <svg className="places__sorting-arrow" width="7" height="4">*/}
          {/*      <use xlinkHref="#icon-arrow-select"> </use>*/}
          {/*    </svg>*/}
          {/*  </span>*/}
          {/*  <ul className="places__options places__options--custom places__options--opened">*/}
          {/*    <li className="places__option places__option--active" tabIndex="0">Popular</li>*/}
          {/*    <li className="places__option" tabIndex="0">Price: low to high</li>*/}
          {/*    <li className="places__option" tabIndex="0">Price: high to low</li>*/}
          {/*    <li className="places__option" tabIndex="0">Top rated first</li>*/}
          {/*  </ul>*/}
          {/*</form>*/}

          {/*<ListOffers offers={offers}/>*/}
          <ListOffers />

        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map city={currentCity} offers={offers} />
          </section>
        </div>
      </div>
    </div>
  );
}

HomeContent.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default HomeContent;
