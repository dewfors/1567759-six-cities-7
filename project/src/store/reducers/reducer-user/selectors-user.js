import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {AuthorizationStatus} from '../../../utils/const';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserInfoStatus = (state) => state[NameSpace.USER].userInfo;
const getIsAuth= createSelector(getAuthorizationStatus, (status) => status === AuthorizationStatus.AUTH);

export {
  getAuthorizationStatus, getUserInfoStatus, getIsAuth
};
