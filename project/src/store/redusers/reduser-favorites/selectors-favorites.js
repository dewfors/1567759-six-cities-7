import {NameSpace} from '../root-ruduser';

const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;
const getFavoritesIsLoading = (state) => state[NameSpace.FAVORITES].loadFavoritesStatus.isLoading;

export {getFavorites, getFavoritesIsLoading};
