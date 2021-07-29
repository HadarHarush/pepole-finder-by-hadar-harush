const INITIAL_STATE = {
  favorites: [],
};

export function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.favorites,
      };
    case "ADD_FAVORITE":
      console.log("adding");
      return {
        ...state,
        favorites: [...state.favorites, action.favorite],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (currFavorite) => currFavorite.login.uuid !== action.uuid
        ),
      };
    case "UPDATE_FAVORITE":
      const { updatedFavorite } = action;
      return {
        ...state,
        favorites: state.favorites.map((currFavorite) =>
          currFavorite.login.uuid === updatedFavorite.login.uuid
            ? updatedFavorite
            : currFavorite
        ),
      };
    default:
      return state;
  }
}
