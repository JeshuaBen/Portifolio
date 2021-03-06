import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Container = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1.4rem;
  padding: 0 2px;
`;
export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  margin-right: 3rem;
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 4rem;
  color: ${({ theme }) => theme.colors.white2};
`;

export const Description = styled.span`
  margin-top: 0.2rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const SocialMedia = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;
export const GithubIcon = styled(FaGithub)`
  height: 1.8rem;
  width: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};

  margin-right: 1.4rem;
`;

export const LinkGithub = styled.a``;

export const TwitterIcon = styled(FaTwitter)`
  height: 1.8rem;
  width: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};

  margin-right: 1.4rem;
`;

export const LinkTwitter = styled.a``;

export const LinkedinIcon = styled(FaLinkedin)`
  height: 1.8rem;
  width: 1.8rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const LinkLinkedin = styled.a``;
