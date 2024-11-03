import styled from "styled-components";

export default function Input({ placeholder }: { placeholder: string }) {
  return (
    <>
      <SInput type="text" placeholder={placeholder} />
    </>
  );
}

const SInput = styled.input`
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid #ccc;
`;
