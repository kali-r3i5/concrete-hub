import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

import { APIUserInterface, APIRepoInterface } from "../../interfaces";

import {
  Container,
  Main,
  LeftSide,
  Repos,
  Span,
  ItalicSpan,
  SearchArea,
  RightSide,
  ErrorSpan,
} from "./styles";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import LoaderComponent from "../../components/Loader";

interface IProfileData {
  user?: APIUserInterface;
  repos?: APIRepoInterface[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username } = useParams();
  const [data, setData] = useState<IProfileData>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: "User not found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const sortByStars = (repos: APIRepoInterface[]) => {
        return repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        });
      };

      const sortedRepos = sortByStars(repos);

      setData({
        user,
        repos: sortedRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return (
      <>
        <Error />
        <ErrorSpan>{data.error}</ErrorSpan>
      </>
    );
  }

  if (!data?.user || !data?.repos) {
    return <LoaderComponent />;
  }

  return (
    <>
      <Container>
        <SearchArea>
          <LeftSide>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
              }}
            >
              <Span>
                Github
                <div style={{ paddingRight: 10 }} />
                <ItalicSpan>Search</ItalicSpan>
              </Span>
            </Link>
          </LeftSide>
          <RightSide>
            <Header />
          </RightSide>
        </SearchArea>
        <Main>
          <LeftSide>
            <ProfileData
              username={data.user.login}
              name={data.user.name}
              followers={data.user.followers}
              following={data.user.following}
              avatarUrl={data.user.avatar_url}
              email={data.user.email}
              bio={data.user.bio}
              public_repos={data.user.public_repos}
            />
          </LeftSide>

          <RightSide>
            <Repos>
              <div>
                {data.repos.map((item) => (
                  <RepoCard
                    key={item.name}
                    username={item.owner.login}
                    reponame={item.name}
                    description={item.description}
                    stars={item.stargazers_count}
                  />
                ))}
              </div>
            </Repos>
          </RightSide>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
