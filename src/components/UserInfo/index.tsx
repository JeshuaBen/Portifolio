import React from "react";

import {
  Container,
  Image,
  UserWrapper,
  Name,
  Description,
  SocialMedia,
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "./style";

export const UserInfo = () => {
  return (
    <Container>
      <Image />
      <UserWrapper>
        <Name></Name>
        <Description></Description>
        <SocialMedia>
          <GithubIcon></GithubIcon>
          <TwitterIcon></TwitterIcon>
          <LinkedinIcon></LinkedinIcon>
        </SocialMedia>
      </UserWrapper>
    </Container>
  );
};
