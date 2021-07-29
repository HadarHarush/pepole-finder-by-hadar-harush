import React from "react";

import Text from "../../components/Text";
import UserList from "../../components/UserList";
import { usePeopleFetch } from "../../hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, fetchUsers } = usePeopleFetch();

  return (
    <S.Content>
      <Text variant="h2" bold>
        PplFinder
      </Text>
      <UserList users={users} isLoading={isLoading} fetchUsers={fetchUsers} />
    </S.Content>
  );
};

export default Home;
