import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SortingTypes} from '../../utils/const';

function SortOffers(props) {

  const {currentSort, setCurrentSort} = props;

  const [isVisibleSortMenu, setVisibleSortMenu] = useState(false);

  const sortMenuClass = `places__options places__options--custom ${isVisibleSortMenu ? 'places__options--opened' : ''}`;
  const sortTypes = Object.keys(SortingTypes).map((item) => SortingTypes[item].sortType);

  const handleOnClickVisibleSortMenu = () => {
    setVisibleSortMenu((state) => !state);
  };

  const handleOnChangeSortType = (sort) => {
    setCurrentSort(sort);
    setVisibleSortMenu((state) => !state);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => handleOnClickVisibleSortMenu()}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"> </use>
        </svg>
      </span>
      <ul className={sortMenuClass}>

        {sortTypes.map((item, index) => (
          <li
            className={`places__option ${item === currentSort ? 'places__option--active' : ''}`}
            key={item + String(index)}
            onClick={() => handleOnChangeSortType(item)}
            tabIndex={0}
          >
            {item}
          </li>
        ))}

      </ul>
    </form>
  );
}

SortOffers.propTypes = {
  currentSort: PropTypes.string.isRequired,
  setCurrentSort: PropTypes.func.isRequired,
};

// const stateToProps = (state) => ({
const stateToProps = ({appSpace}) => ({
  currentSort: appSpace.currentSortType,
});

const dispatchToProps = (dispatch) => ({
  setCurrentSort(value) {
    dispatch(ActionCreator.changeSortType(value));
  },
});

export {SortOffers};
export default connect(stateToProps, dispatchToProps)(SortOffers);
