import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 4.2rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
`;
