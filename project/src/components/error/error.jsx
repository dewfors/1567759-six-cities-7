import React from 'react';
import styles from './error.module.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import PropTypes from 'prop-types';

function Error({textError}) {
  return (
    <div className={[styles.container]}>
      <div className={[styles.item]}>
        <Link className={[styles.refresh]} to={AppRoute.ROOT} >
          {textError}
        </Link>
      </div>
    </div>
  );
}

Error.propTypes = {
  textError: PropTypes.string.isRequired,
};

export default Error;
