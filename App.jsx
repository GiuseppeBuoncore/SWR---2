import Welcome from "./component/Welcome";
import { Routes, Route, Link } from "react-router-dom";
import Counter from "./component/Counter";
import ShowGithubUser from "./component/ShowGithubUser";
import GithubUserList from "./component/GithubUserList";
import GithubUser from "./component/GithubUser";
import GithubUsers from "./component/GithubUsers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Giu" />} />
        <Route path="counter" element={<Counter />} />
        {/*  <Route path="users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route> */}
        <Route path="users" element={<GithubUsers/>}>
          <Route path=":username" element={<GithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/counter">Counter</Link>
      </div>
      <div>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
}

export default App;
