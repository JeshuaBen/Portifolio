import React from "react";

import {
  Container,
  Experience,
  Years,
  WorkExperience,
  Projects,
  AmountOfProjects,
  ProjectDescription,
} from "./style";

interface DescriptionProps {
  years: number;
  workExperience: string;
  amountOfProjects: number;
  projectDescription: string;
}

interface Props {
  data: DescriptionProps;
}

export const Description = ({ data }: Props) => {
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
    </Container>
  );
};
