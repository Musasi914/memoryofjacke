import { Link, Outlet, useNavigate } from "react-router-dom";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import SecondaryButton from "./components/atoms/button/SecondaryButton";
import UserCard from "./components/organisms/user/UserCard";

const user1 = {
  image: "https://picsum.photos/300",
  name: "hogehoge",
  email: "hoge@example.com",
  tel: "0123456789",
  company: "example company",
  website: "https://example.com",
};
export default function Page1() {
  const navigation = useNavigate();
  const onClickNavigate = () => {
    navigation("detail-a");
  };
  return (
    <>
      <PrimaryButton>botan</PrimaryButton>
      <SecondaryButton>botan</SecondaryButton>
      <div>page1</div>
      <Link to={`detail-a`}>detail-a</Link>
      <Outlet />
      <button onClick={onClickNavigate}>detailA</button>
      <UserCard user={user1} />
    </>
  );
}
