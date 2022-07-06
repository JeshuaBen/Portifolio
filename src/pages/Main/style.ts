import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Content = styled.div`
  max-width: 760px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
