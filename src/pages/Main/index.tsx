import React, { useState } from "react";
import { ContactMeButton } from "../../components/ContactMeButton";
import { Description } from "../../components/Description";
import { DownloadButton } from "../../components/DownloadButton";
import { Header } from "../../components/Header";
import { ProjectCard } from "../../components/ProjectCard";
import { SkillCard } from "../../components/SkillCard";
import { TabButton } from "../../components/TabButton";
import { UserInfo } from "../../components/UserInfo";

import {
  Container,
  Content,
  ButtonsContainer,
  SelectedOption,
  CardsContainer,
} from "./style";

export const Main: React.FC = () => {
  const [ísActive, setIsActive] = useState<boolean>(true);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleIsActive = () => {
    setIsActive(true);
    setIsSelected(false);
  };

  const handleIsSelected = () => {
    setIsSelected(true);
    setIsActive(false);
  };

  const dataInfo = {
    years: 1,
    workExperience: "Years of work experience",
    amountOfProjects: 22,
    projectDescription: "Completed projects",
    amountOfDownloads: 0,
  };

  return (
    <Container>
      <Header />

      <Content>
        <UserInfo />
        <Description data={dataInfo} />
        <ButtonsContainer>
          <DownloadButton />
          <ContactMeButton />
        </ButtonsContainer>

        <SelectedOption>
          <TabButton
            text="Portfolio"
            active={ísActive}
            onClick={handleIsActive}
          />
          <TabButton
            text="Skills"
            active={isSelected}
            onClick={handleIsSelected}
          />
        </SelectedOption>
      </Content>

      {ísActive ? (
        <CardsContainer>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </CardsContainer>
      ) : (
        <CardsContainer>
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </CardsContainer>
      )}
    </Container>
  );
};
