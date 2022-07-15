import React from "react";

import { Container, Text } from "./style";

interface Props {
  text: string;
  active: boolean;
}

export const TabButton: React.FC<Props> = ({ text, active }) => {
  return (
    <Container active={active}>
      <Text>{text}</Text>
    </Container>
  );
};
