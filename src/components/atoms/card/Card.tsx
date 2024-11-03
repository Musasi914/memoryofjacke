import styled from "styled-components";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <SCard>{children}</SCard>;
}

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 16px;
  padding: 16px;
`;
