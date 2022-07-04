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
