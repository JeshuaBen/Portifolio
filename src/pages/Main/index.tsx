import React from "react";
import { ContactMeButton } from "../../components/ContactMeButton";
import { Description } from "../../components/Description";
import { DownloadButton } from "../../components/DownloadButton";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Content, ButtonsContainer, SelectedOption } from "./style";

export const Main: React.FC = () => {
  const dataInfo = {
    years: 1,
    workExperience: "Years of work experience",
    amountOfProjects: 22,
    projectDescription: "Completed\n projects",
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

        <SelectedOption></SelectedOption>
      </Content>
    </Container>
  );
};
