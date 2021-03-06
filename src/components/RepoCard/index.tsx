import React from "react";
import { RepoCardInterface } from "../../interfaces";

import { Container, Topside, Botside, StarIcon } from "./styles";

const RepoCard: React.FC<RepoCardInterface> = ({
  username,
  reponame,
  description,
  stars,
}) => {
  return (
    <Container>
      <Topside>
        <header>
          <h1>{reponame}</h1>
        </header>

        <p>{description}</p>
      </Topside>

      <Botside>
        <ul>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
};

export default RepoCard;
