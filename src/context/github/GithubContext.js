import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  const initialState = {
    users: [],
    loading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get Search Result
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const responce = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await responce.json();

    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Get Single User
  const getUser = async (login) => {
    setLoading();

    const responce = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (responce.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await responce.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //Clearing the users
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // Set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
