import { createContext } from "react";
type UserContextProps = {
  userInfo: {
    isAdmin: boolean;
  };
  setUserInfo: React.Dispatch<
    React.SetStateAction<{
      isAdmin: boolean;
    }>
  >;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;
