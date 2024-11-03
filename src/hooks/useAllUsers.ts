import axios from "axios";
import { useState } from "react";
import { GetAxiosUserProps } from "../types/api/user";
import { UserProfileProps } from "../types/userProfile";
export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userProfiles, setUserProfiles] = useState<UserProfileProps[]>();

  const getUsers = () => {
    setLoading(true);
    setError(false);
    axios
      .get<GetAxiosUserProps[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: user.address.street + user.address.suite + user.address.city,
        }));
        setUserProfiles(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { getUsers, userProfiles, loading, error };
};
