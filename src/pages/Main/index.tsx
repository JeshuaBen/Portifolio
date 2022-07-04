import React from "react";
import { Header } from "../../components/Header";
import { UserWrapper } from "../../components/UserInfo/style";

import { Container } from "./style";

export const Main = () => {
  return (
    <Container>
      <Header />
      <UserWrapper />
    </Container>
  );
};
