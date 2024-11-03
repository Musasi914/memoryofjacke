import type { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links: FC = () => {
  return (
    <SUl>
      <li>
        <Link to={`/`}>home</Link>
      </li>
      <li>
        <Link to={`/page1`}>page1</Link>
      </li>
      <li>
        <Link to={`/page2`}>page2</Link>
      </li>
      <li>
        <Link to={`/fetchtest`}>jsonplaceholder</Link>
      </li>
      <li>
        <Link to={`/todos`}>todos</Link>
      </li>
    </SUl>
  );
};

export default Links;

const SUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;
