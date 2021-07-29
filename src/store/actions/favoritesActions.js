import { notificationService } from "../../services/notificationService";
import utilService from "../../services/utilService";

export function toggleFavorite(user) {
  return (dispatch, getState) => {
    const { favorites } = getState().favoritesReducer;
    let action;
    let message;
    if (favorites.some((currFavorite) => currFavorite.login.uuid === user.login.uuid)) {
      action = {
        type: "REMOVE_FAVORITE",
        uuid: user.login.uuid,
      };
      message = `Removed ${utilService.getFullNameFromUser(user)} from favorites`;
    } else {
      action = {
        type: "ADD_FAVORITE",
        favorite: user,
      };
      message = `Added ${utilService.getFullNameFromUser(user)} to favorites`;
    }
    dispatch(action);
    notificationService.notify("success", message);
  };
}
