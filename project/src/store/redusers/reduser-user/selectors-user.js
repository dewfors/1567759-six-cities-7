import {NameSpace} from '../root-ruduser';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserInfoStatus = (state) => state[NameSpace.USER].userInfo;

export {
  getAuthorizationStatus, getUserInfoStatus
};
