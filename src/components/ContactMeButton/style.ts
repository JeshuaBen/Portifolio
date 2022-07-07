import styled from "styled-components";

export const Container = styled.button`
  width: 48%;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
export const Text = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.gray};
`;
