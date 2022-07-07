import styled from "styled-components";

import { HiDownload } from "react-icons/hi";

export const Container = styled.button`
  width: 48%;
  height: 4.2rem;
  padding: 1.5rem 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.colors.dark};
`;
export const Icon = styled(HiDownload)`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.dark};
`;
