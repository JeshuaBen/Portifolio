import styled from "styled-components";
import { FaRegSun } from "react-icons/fa";

export const Container = styled.header``;

export const Button = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0;

  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.darkBlue};

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Icon = styled(FaRegSun)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.gray};

  font-size: 1.4rem;
`;
