import React, { useRef, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

import * as S from "./style";
import Text from "../../components/Text";
import Spinner from "../../components/Spinner";
import CheckBox from "../../components/CheckBox";
import { toggleFavorite } from "../../store/actions/favoritesActions";
import utilService from "../../services/utilService";
import { COUNTRIES } from "../../constant";

const UserList = ({ users, isLoading, fetchUsers }) => {
  const dispatch = useDispatch();
  const elList = useRef(null);
  const [filteredCountriesNats, setFilteredCountriesNats] = useState([]);
  // @ts-ignore
  const { favorites } = useSelector(({ favoritesReducer }) => favoritesReducer);
  const [searchStr, setSearchStr] = useState("");

  const getFilteredUsers = () => {
    let res = users;

    //countries filtering:
    res = !filteredCountriesNats.length
      ? res
      : res.filter(({ nat }) => {
          return filteredCountriesNats.includes(nat);
        });

    //string filtering
    res = res.filter(({ email, name, location: { street, city, country } }) => {
      return utilService.isStringsIncludesString(
        [email || "", street.name, city, country, Object.values(name).join(" ")],
        searchStr
      );
    });

    return res;
  };

  const handleFilterClick = (countryNat) => {
    if (filteredCountriesNats.includes(countryNat)) {
      return setFilteredCountriesNats(
        filteredCountriesNats.filter((currCountryNat) => currCountryNat !== countryNat)
      );
    }
    setFilteredCountriesNats([...filteredCountriesNats, countryNat]);
  };

  const onListScroll = () => {
    if (!isLoading && users.length < 150) {
      const { offsetHeight, scrollTop, scrollHeight } = elList.current;
      if (offsetHeight + scrollTop >= scrollHeight - 100) {
        fetchUsers();
      }
    }
  };

  return (
    <S.UserList>
      <S.Filters>
        {COUNTRIES.map(({ nat, name }) => (
          <CheckBox
            isChecked={filteredCountriesNats.includes(nat)}
            key={nat}
            value={nat}
            label={name.charAt(0).toUpperCase() + name.slice(1)}
            onChange={() => handleFilterClick(nat)}
          />
        ))}
      </S.Filters>

      <S.Search className="search flex align-center">
        <SearchIcon />
        <S.SearchInput
          placeholder="Search..."
          className="fg-1"
          value={searchStr}
          onChange={({ target: { value } }) => setSearchStr(value)}
        />
      </S.Search>
      <S.List ref={elList} className="users-list" onScroll={onListScroll}>
        {getFilteredUsers().map((user) => {
          return (
            <S.User key={user.login.uuid}>
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text variant="h6" bold>
                  {utilService.getFullNameFromUser(user)}
                </Text>
                <Text variant="body2">{user?.email}</Text>
                <Text variant="body2">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text variant="body2">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper
                className={`icon-button-wrapper ${
                  favorites.some(
                    (currFavorite) => currFavorite.login.uuid === user.login.uuid
                  )
                    ? "active"
                    : ""
                }`}
              >
                <IconButton onClick={() => dispatch(toggleFavorite(user))}>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
        {users.length >= 150 && (
          <Text variant="body1">You have reached the allowed amount of users</Text>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
