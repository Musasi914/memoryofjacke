import styled from "styled-components";
import Links from "../../Links";

export default function Footer() {
  return (
    <SFooter>
      <Links />
      <p>&copy;2024matsuda</p>
    </SFooter>
  );
}

const SFooter = styled.footer`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
