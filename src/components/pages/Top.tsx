import styled from "styled-components";
import SecondaryButton from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../provider/UserProvider";

export default function Top() {
  const { setUserInfo } = useUserContext();

  const navigate = useNavigate();
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("users");
  };
  return (
    <SContainer>
      <h2>TOP</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
}

const SContainer = styled.div`
  text-align: center;
`;
