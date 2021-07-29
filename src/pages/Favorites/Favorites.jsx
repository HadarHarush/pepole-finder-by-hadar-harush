import React from "react";
import { useSelector } from "react-redux";

import * as S from "./style";
import FavoritePreview from "../../components/FavoritePreview";
import Text from "../../components/Text";

const Favorites = () => {
  // @ts-ignore
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  return (
    <S.Content>
      <Text variant="h2" bold>
        Favorites
      </Text>
      {!favorites.length && (
        <Text variant="body2" textAlign="center">
          Its looks like you dont have any favorites. You can add them in the home page.
        </Text>
      )}
      <S.FavoritesList>
        {favorites.map((currFavorite) => (
          <FavoritePreview key={currFavorite.login.uuid} user={currFavorite} />
        ))}
      </S.FavoritesList>
    </S.Content>
  );
};

export default Favorites;
