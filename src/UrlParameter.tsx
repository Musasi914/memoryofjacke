import { useLocation, useParams } from "react-router-dom";

export default function UrlParameter() {
  const { id } = useParams();
  const { search, state } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <>
      <h1>UrlParameter ページだ</h1>
      <p>{id}</p>
      <p>{query.get("name")}</p>
    </>
  );
}
