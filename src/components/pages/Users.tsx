import styled from "styled-components";
import SearchInput from "../molecules/SearchInput";
import UserCard from "../organisms/user/UserCard";
// import { useLocation } from "react-router-dom";
import { useUserContext } from "../../provider/UserProvider";
import SecondaryButton from "../atoms/button/SecondaryButton";

const users = [...Array(20).keys()].map((val) => {
  return {
    id: val,
    name: `matsuda${val}`,
    email: "aaa@gmail.com",
    tel: "00000000000",
    company: "株式会社",
    website: "string",
    image: "https://picsum.photos/300",
  };
});
export default function Users() {
  const { userInfo, setUserInfo } = useUserContext();
  // const location = useLocation();
  const isAdmin = userInfo.isAdmin;
  console.log(isAdmin);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  padding-inline: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;
