import { Link } from "react-router-dom";

export default function Page2() {
  const arr = [...Array(20).keys()];
  return (
    <>
      <p>page2</p>
      <Link to={`1`}>id</Link>
      <Link to={`1111?name=hoge`} state={arr}>
        id
      </Link>
    </>
  );
}
