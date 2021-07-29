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

      <S.FavoritesList>
        {favorites.map((currFavorite) => (
          <FavoritePreview key={currFavorite.login.uuid} user={currFavorite} />
        ))}
      </S.FavoritesList>
    </S.Content>
  );
};

export default Favorites;
