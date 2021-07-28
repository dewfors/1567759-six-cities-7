import {NameSpace} from '../root-ruduser';

const getComments = (state) => state[NameSpace.COMMENT].reviews;

export {
  getComments
};
