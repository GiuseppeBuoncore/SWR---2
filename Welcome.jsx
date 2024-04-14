import { Link, useNavigate } from "react-router-dom";

function Welcome({ name }) {
  const navigate = useNavigate();

  function handleCounterClick() {
    navigate("/counter");
  }

  return (
    <div>
      <p>Welcome, {name}!</p>
      <div>
        <button onClick={handleCounterClick}>Show Counter</button>
      </div>
    </div>
  );
}

export default Welcome;
