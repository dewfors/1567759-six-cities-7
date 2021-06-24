import React from 'react';
import PropTypes from 'prop-types';
import ListOffers from '../list-offers/list-offers';
import Map from '../map/map';
import placeCardProp from '../place-card/place-card.prop';
import Page from '../app/page';
import Main from '../app/main';
import CityList from './city-list';
import HomeContent from './home-content';


function PageHome(props) {
  const {placesToStay, offers, city} = props;

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <HomeContent placesToStay={placesToStay} offers={offers} city={city}/>
      </Main>
    </Page>
  );
}

PageHome.propTypes = {
  placesToStay: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  city: PropTypes.shape({
    title: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
};

export default PageHome;
