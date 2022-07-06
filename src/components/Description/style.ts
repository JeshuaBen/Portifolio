import styled from "styled-components";

export const Container = styled.div`
  max-width: 640px;
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 2rem;
  padding: 1.2rem 2rem;
`;

export const Experience = styled.div`
  width: 48%;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-right: 5.6rem;
`;

export const Years = styled.span`
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.gray};
`;

export const WorkExperience = styled.span`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.gray};
`;

export const Projects = styled.div`
  width: 48%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AmountOfProjects = styled.span`
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.gray};
`;

export const ProjectDescription = styled.span`
  font-size: 1.2rem;

  color: ${({ theme }) => theme.colors.gray};
`;
