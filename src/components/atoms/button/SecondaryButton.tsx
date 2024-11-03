import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type SecondaryButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
};

export default function SecondaryButton({
  children,
  onClick,
}: SecondaryButtonProps) {
  return <SButton onClick={onClick}>{children}</SButton>;
}

const SButton = styled(BaseButton)`
  background-color: #0b211d;
`;
