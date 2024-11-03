import styled from "styled-components";
import { BaseButton } from "./BaseButton";

type PrimaryButtonProps = {
  children: React.ReactNode | string;
  onClick?: () => void;
};

export default function PrimaryButton({
  children,
  onClick,
}: PrimaryButtonProps) {
  return <SButton onClick={onClick}>{children}</SButton>;
}

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
