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
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Years = styled.span`
  font-size: 1.5rem;

  color: ${({ theme }) => theme.colors.gray};
`;

export const WorkExperience = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Projects = styled.div`
  margin: 0 4rem;
  display: flex;
  flex-direction: column;
`;

export const AmountOfProjects = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Downloads = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AmountOfDownloads = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;
export const DownloadsDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;
