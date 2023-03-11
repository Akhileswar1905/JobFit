import { useLocation } from "react-router-dom";

const ComDashBoard = () => {
  const location = useLocation();
  const formData = location.state.data;
  const skills = formData.SkillsRequired.split(",");
  console.log(formData);

  return (
    <div className="dashboard">
      {/* Upper Box */}
      <div className="dash-box">
        <div className="profile">
          <img src={formData.img} alt="profile-pic" className="profile-pic" />
        </div>
        <div className="personal-info">
          <h1 className="name">Company Name: {formData.CompanyName} </h1>
          <p>Name: {formData.Fname + " " + formData.Lname}</p>
          <p>Email: {formData.Email} </p>
          <p>Phone number: {formData.ContactInfo}</p>
          <p>About: {formData.Description}</p>
        </div>
      </div>

      <div className="lower-box">
        {/*  SkillsRequired */}
        <div className="box-1">
          <div className="dashboard-container skills">
            <h3>Skills</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Experience, Projects and Companies Interested In */}
        <div className="box-2">
          <div className="dashboard-container experience">
            <h3>Experiences</h3>
            <p> {formData.Experience} </p>
          </div>
          <div className="dashboard-container posts">
            <h3>Posts</h3>
            <p> {formData.Posts} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComDashBoard;
