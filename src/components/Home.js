import linkedin from "../images/linkedin2.png";
import github from "../images/github2.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const apiEndpoint = "https://api.vercel.com";
  const apiToken = "WujLdaQTLWW9GB8eD0RHmPk3";

  fetch(`${apiEndpoint}/v9/projects`, {
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return (
    <div className="container">
      <header>
        <h1>Welcome To JobFit</h1>
      </header>
      <main>
        <div className="box-container">
          <div className="box">
            <div className="img">
              <img src={github} alt="" />
            </div>
            <h1>Companies</h1>
            <p>Search for the potential employees for your companies</p>
            <button onClick={() => navigate("authcom/signup-com")}>
              Recruit
            </button>
          </div>
          <div className="box">
            <div className="img">
              <img src={linkedin} alt="" />
            </div>
            <h1>Employee</h1>
            <p>
              Check your worthiness and make your dream real by getting job in
              your dream companies
            </p>
            <button onClick={() => navigate("auth/signup")}>Get Hired</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
