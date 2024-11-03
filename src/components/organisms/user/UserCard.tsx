import styled from "styled-components";
import Card from "../../atoms/card/Card";
import UserIconWithName from "../../molecules/user/UserIconWithName";
import { memo } from "react";

type UserProps = {
  user: {
    id?: number;
    name: string;
    email: string;
    tel: string;
    company: string;
    website: string;
    image?: string;
  };
};

export default memo(function UserCard({ user }: UserProps) {
  console.log("userCard");
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company}</dd>
        <dt>website</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 36px;
    padding-bottom: 8px;
  }
`;
