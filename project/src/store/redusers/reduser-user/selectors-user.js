import {NameSpace} from '../root-ruduser';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export {
  getAuthorizationStatus
};
