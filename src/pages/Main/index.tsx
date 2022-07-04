import React from "react";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";

import { Container } from "./style";

export const Main = () => {
  return (
    <Container>
      <Header />
      <UserInfo />
    </Container>
  );
};
