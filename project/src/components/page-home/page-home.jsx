import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Page from '../app/page';
import Main from '../app/main';
import CityList from './city-list';
import HomeContent from './home-content';
import {changeCity} from '../../store/action';
import {getCurrentCity} from '../../store/redusers/reduser-app/selectors-app';
import {getOffers} from '../../store/redusers/reduser-offers/selectors-offers';
import {Settings} from '../../utils/const';


function PageHome(props) {

  const cityList = Settings.CITYES;

  const dispatch = useDispatch();
  const offers = useSelector(getOffers);
  const currentCity = useSelector(getCurrentCity);
  const offersList = offers.filter((offer) => (offer.city.name === currentCity));

  const isOffersEmpty = offersList.length === 0;
  const pageMainIndexEmptyClassName = isOffersEmpty ? 'page__main--index-empty' : '';

  const onChangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <Page className="page--gray page--main" {...props}>
      <Main className={`page__main--index ${pageMainIndexEmptyClassName}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityList onChangeCity={onChangeCity} cityList={cityList} currentCity={currentCity} />
        <HomeContent />
      </Main>
    </Page>
  );
}

export default PageHome;
