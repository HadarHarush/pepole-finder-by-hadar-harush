import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const getUsers = () => {
    return axios
      .get(`https://randomuser.me/api/?results=25&page=1`)
      .then((res) => res.data.results);
  };

  async function fetchUsers() {
    setIsLoading(true);
    const response = await getUsers();
    setIsLoading(false);
    setUsers([...users, ...response]);
  }

  return { users, isLoading, fetchUsers };
};
