import React from "react";
import { Link } from "react-router-dom";
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
          <h1>
            <Link
              to={`/${username}/${reponame}`}
              style={{
                textDecoration: "none",
              }}
            >
              {reponame}
            </Link>
          </h1>
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
