import React from "react";
import { Description } from "../../components/Description";
import { DownloadButton } from "../../components/DownloadButton";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Content, ButtonsContainer } from "./style";

export const Main = () => {
  const dataInfo = {
    years: 1,
    workExperience: "Years of work experience",
    amountOfProjects: 22,
    projectDescription: "Completed\n projects",
  };

  return (
    <Container>
      <Header />
      <Content>
        <UserInfo />
        <Description data={dataInfo} />
        <ButtonsContainer>
          <DownloadButton />
        </ButtonsContainer>
      </Content>
    </Container>
  );
};
