import React from "react";
import { useDispatch } from "react-redux";
import { Button, Card, IconButton } from "@material-ui/core";
import FavIcon from "@material-ui/icons/Favorite";

import * as S from "./style";
import Text from "../Text";
import { toggleFavorite } from "../../store/actions/favoritesActions";
import utilService from "../../services/utilService";

const FavoritePreview = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <S.MyCard className="favorite-preview" key={user.login.uuid}>
      <div className="content">
        <img src={user.picture.large} alt="" />
        <Text variant="h6" textAlign="center" bold>
          {utilService.getFullNameFromUser(user)}
        </Text>
        <Text variant="body2" textAlign="center">
          {user?.email ? user.email : "No email"}
        </Text>
        <Text variant="body2" textAlign="center">
          {user?.location.city} {user?.location.country}
        </Text>
      </div>
      <Button
        variant="contained"
        startIcon={<FavIcon />}
        color={"secondary"}
        onClick={() => dispatch(toggleFavorite(user))}
      >
        favorites
      </Button>
    </S.MyCard>
  );
};

export default FavoritePreview;
