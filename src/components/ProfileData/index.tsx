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
            <h3>{bio}</h3>
          </li>
        )}

        {followers > 0 && (
          <li>
            <Icon src={locationIcon} />
            <h3>{followers}</h3>
          </li>
        )}

        {following > 0 && (
          <li>
            <Icon src={starIcon} />
            <h3>{following}</h3>
          </li>
        )}

        {email && (
          <li>
            <Icon src={repositoryIcon} />
            <h3>{email}</h3>
          </li>
        )}

        {public_repos > 0 && (
          <li>
            <Icon src={followerIcon} />
            <h3>{public_repos}</h3>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
