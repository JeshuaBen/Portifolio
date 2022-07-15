import styled from "styled-components";

interface ButtonProps {
  active: boolean;
}

export const Container = styled.button<ButtonProps>`
  width: 349px;
  height: 80px;

  padding: auto;

  border: 0;
  border-radius: 10px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors.darkBlue};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Text = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray};
`;
