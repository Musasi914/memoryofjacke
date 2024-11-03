import styled from "styled-components";
import Links from "../../Links";

export default function Header() {
  return (
    <SHeader>
      <Links />
    </SHeader>
  );
}

const SHeader = styled.header`
  background: #fff;
  padding: 1rem;
`;
