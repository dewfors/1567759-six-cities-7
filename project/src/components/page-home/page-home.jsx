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
  const {offers, cityList, currentCity, onChangeCity} = props;
  const offersList = offers.filter((offer) => (offer.city.name === currentCity));
  const placesToStay = offersList.length;

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className="page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList onChangeCity={onChangeCity} cityList={cityList} currentCity={currentCity} />
        <HomeContent placesToStay={placesToStay} offers={offersList} currentCity={currentCity}/>
      </Main>
    </Page>
  );
}

PageHome.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([placeCardProp]).isRequired,
  ).isRequired,
  cityList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {PageHome};
export default connect(mapStateToProps, mapDispatchToProps)(PageHome);
