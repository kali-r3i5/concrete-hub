import React from "react";
import organizationIcon from "../../assets/organization.svg";
import locationIcon from "../../assets/location.svg";
import starIcon from "../../assets/star.svg";
import repositoryIcon from "../../assets/repository.svg";
import followerIcon from "../../assets/follower.svg";

import { Container, Flex, Avatar, Column, Icon } from "./styles";
import { ProfileDataInterface } from "../../interfaces";
const ProfileData: React.FC<ProfileDataInterface> = ({
  username,
  name,
  followers,
  following,
  avatarUrl,
  email,
  bio,
  public_repos,
}) => {
  return (
    <Container>
      <Flex>
        <figure>
          <Avatar src={avatarUrl} alt={username} />
        </figure>

        <div>
          <h2>{name}</h2>
          <h3>{username}</h3>
        </div>
      </Flex>

      <Column>
        {bio && (
          <li>
            <Icon src={organizationIcon} />
            <span>{bio}</span>
          </li>
        )}
        <li>
          <Icon src={locationIcon} />
          <span>{followers}</span>
        </li>

        <li>
          <Icon src={starIcon} />
          <span>{following}</span>
        </li>

        {email && (
          <li>
            <Icon src={repositoryIcon} />
            <span>{email}</span>
          </li>
        )}

        {public_repos && (
          <li>
            <Icon src={followerIcon} />
            <span>{public_repos}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
