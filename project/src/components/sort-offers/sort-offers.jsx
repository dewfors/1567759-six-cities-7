import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeSortType} from '../../store/action';
import {SortingTypes} from '../../utils/const';
import {getCurrentSortType} from '../../store/redusers/reduser-app/selectors-app';

function SortOffers() {

  const dispatch = useDispatch();
  const currentSort = useSelector(getCurrentSortType);

  const setCurrentSort = (value) => {
    dispatch(changeSortType(value));
  };

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

export default SortOffers;
