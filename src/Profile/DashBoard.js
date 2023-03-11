import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  const formData = JSON.parse(localStorage.getItem("dashboard"));
  const skills = formData.SkillSet.split(",");
  console.log(formData);

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
                <a href={formData.certificates} target="_blank">
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
            <p> {formData.projects} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

/*----------------------------------------------------------------
        <div className="profile-name">
          <img
            src={formData.profilePic}
            alt="profile-pic"
            className="profile-pic"
          />
          <h1 className="name">{formData.Fname + " " + formData.Lname}</h1>
        </div>
        <div className="dashboard-container personal-info">
          <h3>Personal Information</h3>
          <p>Email: {formData.Email} </p>
          <p>Phone number: {formData.Phonenumber}</p>
          <p>About: {formData.profile}</p>
        </div>

        <div className="dashboard-container education">
          <h3>Education</h3>
          <p>Education: {formData.education} </p>
        </div>

        <div className="dashboard-container skills">
          <h3>Skills</h3>
          <p>Skills : {formData.SkillSet.replaceAll(",", "\n")} </p>
        </div>

        <div className="dashboard-container certification">
          <h3>Certifications</h3>
          <p>Certifications: {formData.certificates} </p>
        </div>

        <div className="dashboard-container experience">
          <h3>Experiences</h3>
          <p>Experience: {formData.experience} </p>
        </div>

        <div className="dashboard-container projects">
          <h3>Projects</h3>
          <p>Projects: {formData.projects} </p>
        </div>

        <div className="dashboard-container company">
          <h3>Companies you are interested in</h3>
          <p>Companies: {companies} </p>
        </div>
------------------------------------------------------------------*/
