import React from "react";
import { Description } from "../../components/Description";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container, Content } from "./style";

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
      </Content>
    </Container>
  );
};
