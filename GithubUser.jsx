import { useParams } from "react-router-dom";
import useGithubUser from "./useGithubUser";

function GithubUser() {
  const { username } = useParams();
  const { data, error, loading, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser();
  }

  return (
    <div>
      <button onClick={handleGetUserData}> Load user data</button>
      {loading && <h3>Loading...</h3>}
      {error && <h3>An error has occured</h3>}
      {data && <h1> {data.name} </h1>}
    </div>
  );
}

export default GithubUser;
