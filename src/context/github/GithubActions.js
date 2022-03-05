const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Get Search Result
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const responce = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await responce.json();
  return items;
};

// Get Single User
export const getUser = async (login) => {
  const responce = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (responce.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await responce.json();
    return data;
  }
};

// Get User reops
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 15,
  });

  const responce = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await responce.json();
  return data;
};
