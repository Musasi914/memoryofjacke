import { useAllUsers } from "../../hooks/useAllUsers";
import PrimaryButton from "../atoms/button/PrimaryButton";
import UserCardWithNoImage from "../organisms/UserCardWithNoImage";

export default function FetchTest() {
  const { error, loading, userProfiles, getUsers } = useAllUsers();
  const onClickUsers = () => getUsers();

  return (
    <>
      <h2>JsonPlaceHolderのtest</h2>
      <PrimaryButton onClick={onClickUsers}>Users</PrimaryButton>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <>
          {userProfiles?.map((userProfile) => (
            <UserCardWithNoImage
              key={userProfile.id}
              id={userProfile.id}
              name={userProfile.name}
              email={userProfile.email}
              address={userProfile.address}
            />
          ))}
        </>
      )}
    </>
  );
}
