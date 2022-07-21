import React from "react";
import { ButtonProps } from "@chakra-ui/react";

import { Container, Text } from "./style";

interface Props extends ButtonProps {
  text: string;
  active: boolean;
}

export const TabButton: React.FC<Props> = ({ text, active, ...rest }) => {
  return (
    <Container {...rest} active={active}>
      <Text>{text}</Text>
    </Container>
  );
};
