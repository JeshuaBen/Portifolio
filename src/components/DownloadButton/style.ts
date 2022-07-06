import styled from "styled-components";

import { HiDownload } from "react-icons/hi";

export const Container = styled.button`
  width: 290px;
  height: 5rem;
  padding: 1.5rem 2.6rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  margin-right: 0.8rem;

  color: ${({ theme }) => theme.colors.dark};
`;
export const Icon = styled(HiDownload)`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.dark};
`;
