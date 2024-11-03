import styled from "styled-components";
import { useUserContext } from "../../../provider/UserProvider";
import { memo } from "react";

type UserIconWithNameProps = {
  image?: string;
  name: string;
};

export default memo(function UserIconWithName({
  image,
  name,
}: UserIconWithNameProps) {
  const { userInfo } = useUserContext();
  const isAdmin = userInfo.isAdmin;
  return (
    <SContainer>
      <SImg src={image} width={160} height={160} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <button>編集</button>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
