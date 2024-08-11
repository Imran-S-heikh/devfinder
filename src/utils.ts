export function isSystemDark() {
  if (isServer()) {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Example response from the GitHub API
// {
//   "login": "Imran-S-heikh",
//   "id": 52422304,
//   "node_id": "MDQ6VXNlcjUyNDIyMzA0",
//   "avatar_url": "https://avatars.githubusercontent.com/u/52422304?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Imran-S-heikh",
//   "html_url": "https://github.com/Imran-S-heikh",
//   "followers_url": "https://api.github.com/users/Imran-S-heikh/followers",
//   "following_url": "https://api.github.com/users/Imran-S-heikh/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Imran-S-heikh/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Imran-S-heikh/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Imran-S-heikh/subscriptions",
//   "organizations_url": "https://api.github.com/users/Imran-S-heikh/orgs",
//   "repos_url": "https://api.github.com/users/Imran-S-heikh/repos",
//   "events_url": "https://api.github.com/users/Imran-S-heikh/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Imran-S-heikh/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Imran Sheikh",
//   "company": null,
//   "blog": "",
//   "location": "Bangladesh",
//   "email": null,
//   "hireable": true,
//   "bio": "Dedicated and Passionate About my work and Love to develop.\r\n",
//   "twitter_username": null,
//   "public_repos": 20,
//   "public_gists": 1,
//   "followers": 10,
//   "following": 2,
//   "created_at": "2019-07-01T16:59:07Z",
//   "updated_at": "2024-07-04T14:32:43Z"
// }

export interface Profile {
  name: string;
  handle: string;
  avatar: string;
  bio: string | null;
  join: string;
  repos: number;
  followers: number;
  following: number;
  twitter: string | null;
  github: string;
  location: string | null;
  blog: string
}

export async function getProfile(username: string) {
  const result = await fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return null;
    });

  if (!result || result?.status === "404") {
    return null;
  }

  return {
    name: result.name,
    handle: result.login,
    avatar: result.avatar_url,
    bio: result.bio,
    join: new Date(result.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    repos: result.public_repos,
    followers: result.followers,
    following: result.following,
    twitter: result.twitter_username,
    github: result.html_url,
    location: result.location,
    blog: result.blog
  } as Profile;
}

export const defaultProfile: Profile = {
  name: "Imran Sheikh",
  handle: "Imran-S-heikh",
  avatar: "https://avatars.githubusercontent.com/u/52422304?v=4",
  bio: "Dedicated and Passionate About my work and Love to develop.\r\n",
  join: "July 1, 2019",
  repos: 20,
  followers: 10,
  following: 2,
  twitter: null,
  github: "https://github.com/Imran-S-heikh",
  location: "Bangladesh",
  blog: ""
};

export function isServer() {
  return typeof window === "undefined";
}
