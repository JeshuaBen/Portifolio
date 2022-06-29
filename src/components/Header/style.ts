import styled from "styled-components";
import { FaRegSun } from "react-icons/fa";

export const Container = styled.header``;

export const Button = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0;

  background-color: ${({ theme }) => theme.colors.darkBlue};

  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Icon = styled(FaRegSun)`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.gray};

  font-size: 1rem;
`;
