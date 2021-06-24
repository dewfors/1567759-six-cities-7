import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import placeCardProp from '../place-card/place-card.prop';
import Page from '../app/page';
import Main from '../app/main';
import CityList from './city-list';
import HomeContent from './home-content';
import {ActionCreator} from '../../store/action';


function PageHome(props) {
  const {placesToStay, offers, city, cityList, currentCity, onChangeCity} = props;

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList onChangeCity={onChangeCity} cityList={cityList} currentCity={currentCity} />
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

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {PageHome};
export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
