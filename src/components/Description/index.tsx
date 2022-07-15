import React from "react";

import {
  Container,
  Experience,
  Years,
  WorkExperience,
  Projects,
  AmountOfProjects,
  ProjectDescription,
  Downloads,
  AmountOfDownloads,
  DownloadsDescription,
} from "./style";

interface DescriptionProps {
  years: number;
  workExperience: string;
  amountOfProjects: number;
  projectDescription: string;
  amountOfDownloads: number;
}

interface Props {
  data: DescriptionProps;
}

export const Description: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Experience>
        <Years>{data.years}</Years>
        <WorkExperience>
          {data.years === 1 ? `Year of work experience` : data.workExperience}
        </WorkExperience>
      </Experience>

      <Projects>
        <AmountOfProjects>{data.amountOfProjects}+</AmountOfProjects>
        <ProjectDescription>{data.projectDescription}</ProjectDescription>
      </Projects>

      <Downloads>
        <AmountOfDownloads>{data.amountOfDownloads}</AmountOfDownloads>
        <DownloadsDescription>Downloads curricullum</DownloadsDescription>
      </Downloads>
    </Container>
  );
};
