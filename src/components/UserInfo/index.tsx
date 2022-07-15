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
  LinkGithub,
  LinkTwitter,
  LinkLinkedin,
} from "./style";

export const UserInfo: React.FC = () => {
  return (
    <Container>
      <Image src="https://avatars.githubusercontent.com/u/89667317?v=4" />
      <UserWrapper>
        <Name>Jeshua Costa</Name>
        <Description>Mobile Developer</Description>
        <SocialMedia>
          <LinkGithub href="https://github.com/JeshuaBen" target="_blank">
            <GithubIcon />
          </LinkGithub>
          <LinkTwitter href="https://twitter.com/gvezesg" target="_blank">
            <TwitterIcon />
          </LinkTwitter>
          <LinkLinkedin
            href="https://www.linkedin.com/in/jeshua-costa-0792921b5/"
            target="_blank"
          >
            <LinkedinIcon />
          </LinkLinkedin>
        </SocialMedia>
      </UserWrapper>
    </Container>
  );
};
