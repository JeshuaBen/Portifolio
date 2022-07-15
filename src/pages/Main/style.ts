import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
  height: 120px;
  padding: 0 1.2rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.darkBlue};

  border-radius: 20px;
`;

export const CardsContainer = styled.div`
  width: 756px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
