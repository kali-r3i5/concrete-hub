export interface APIUserInterface {
  company: string;
  login: string;
  username: string;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  email?: string;
  bio: string;
  public_repos: number;
}

export interface APIRepoInterface {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}

export interface ProfileDataInterface {
  company: string;
  username: string;
  name: string;
  followers: number;
  following: number;
  avatarUrl: string;
  email?: string;
  bio: string;
  public_repos: number;
}

export interface RepoCardInterface {
  username: string;
  reponame: string;
  description?: string;
  stars: number;
}

export interface ProfileInterface {
  user?: APIUserInterface;
  repos?: APIRepoInterface[];
  error?: string;
}
