import styled from "styled-components";
import { UserProfileProps } from "../../types/userProfile";

export default function UserCardWithNoImage({
  id,
  name,
  email,
  address,
}: Pick<UserProfileProps, "id" | "name" | "email" | "address">) {
  return (
    <SContainer>
      <dl>
        <dt>名前</dt>
        <dd>
          {id}
          {name}
        </dd>
        <dt>メール</dt>
        <dd>{email}</dd>
        <dt>住所</dt>
        <dd>{address}</dd>
      </dl>
    </SContainer>
  );
}

const SContainer = styled.div`
  background-color: #fff;
`;
