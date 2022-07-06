import React from "react";
import { Description } from "../../components/Description";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container } from "./style";

export const Main = () => {
  const dataInfo = {
    years: 1,
    workExperience: "Years of work experience",
    amountOfProjects: 22,
    projectDescription: "Completed projects",
    amountOfCustomers: 1,
    descriptionCustomers: "Satisfied customers",
  };

  return (
    <Container>
      <Header />
      <UserInfo />
      <Description data={dataInfo} />
    </Container>
  );
};
