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
      <Image src="https://avatars.githubusercontent.com/u/89667317?v=4" />
      <UserWrapper>
        <Name>Jeshua Costa</Name>
        <Description>Software Engineer</Description>
        <SocialMedia>
          <GithubIcon></GithubIcon>
          <TwitterIcon></TwitterIcon>
          <LinkedinIcon></LinkedinIcon>
        </SocialMedia>
      </UserWrapper>
    </Container>
  );
};
