import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
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
} from "./styles";

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

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6); // 6 repos

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <Loader />;
  }

  return (
    <>
      <Container>
        <SearchArea>
          <LeftSide>
            <Span>
              Github <ItalicSpan> Search</ItalicSpan>
            </Span>
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
