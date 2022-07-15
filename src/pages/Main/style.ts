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

export const ButtonsContainer = styled.div`
  width: 620px;
  display: flex;
  justify-content: space-between;

  margin: 1rem 0 2rem;
`;

export const SelectedOption = styled.div`
  width: 756px;
  height: 132px;
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.darkBlue};

  border-radius: 20px;
`;
