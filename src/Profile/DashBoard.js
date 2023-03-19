import { useNavigate } from "react-router";

const DashBoard = () => {
  const navigate = useNavigate();

  const formData = JSON.parse(localStorage.getItem("dashboard"));
  const skills = formData.SkillSet.split(",");
  console.log(formData);

  const handleClick = () => {
    localStorage.clear();
    localStorage.setItem("user", null);
    navigate("/");
    const listContent = document.querySelector(".listContent");
    listContent.innerText = "|";
  };

  return (
    <div className="dashboard">
      {/* Upper Box */}
      <div className="dash-box">
        <div className="profile">
          <img src={formData.img} alt="profile-pic" className="profile-pic" />
        </div>
        <div className="personal-info">
          <h1 className="name">{formData.Fname + " " + formData.Lname}</h1>
          <p>Email: {formData.Email} </p>
          <p>Phone number: {formData.PhoneNumber}</p>
          <p>About: {formData.Profile}</p>
        </div>
      </div>

      <div className="lower-box">
        {/* Education, SkillSet, Certification */}
        <div className="box-1">
          <div className="dashboard-container education">
            <h3>Education</h3>
            <p> {formData.Education} </p>
          </div>

          <div className="dashboard-container skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="dashboard-container certification">
            <h3>Certifications</h3>
            <p>
              {" "}
              {
                <a href={formData.Certifications}>
                  <button className="mt-1 cred">Credentials</button>
                </a>
              }{" "}
            </p>
          </div>
        </div>

        {/* Experience, Projects and Companies Interested In */}
        <div className="box-2">
          <div className="dashboard-container experience">
            <h3>Experiences</h3>
            <p> {formData.Experience} </p>
          </div>

          <div className="dashboard-container projects">
            <h3>Projects</h3>
            <p> {formData.Projects} </p>
          </div>
        </div>
      </div>
      <button className="logout" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};

export default DashBoard;
