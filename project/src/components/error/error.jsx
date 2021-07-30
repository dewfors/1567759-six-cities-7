import React from 'react';
import styles from './error.module.scss';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

function Error() {
  return (
    <div className={[styles.container]}>
      <div className={[styles.item]}>
        <Link className={[styles.refresh]} to={AppRoute.ROOT} >
          Failed request. Try-again
        </Link>
      </div>
    </div>
  );
}

export default Error;
