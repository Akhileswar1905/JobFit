import { useLocation } from "react-router-dom";

const ComDashBoard = () => {
  const location = useLocation();
  const formData = location.state.formData;
  const skillSet = formData.SkillSet.split(",");
  console.log(skillSet);
  console.log(formData.SkillSet);
  return (
    <div className="dashboard">
      <div className="dash-box">
        <div className="profile-name">
          <img
            src={formData.profilePic}
            alt="profile-pic"
            className="profile-pic"
          />
          <h1 className="name">{formData.Fname + " " + formData.Lname}</h1>
        </div>
        <div className="dashboard-container personal-info">
          <h3>Company Information</h3>
          <p>Email : {formData.Email} </p>
          <p>Contact Details : {formData.contact}</p>
          <p>Description : {formData.profile}</p>
        </div>

        <div className="dashboard-container experience">
          <h3>Experiences</h3>
          <p>Experience : {formData.experience} </p>
        </div>

        <div className="dashboard-container skills">
          <h3>Required Skills</h3>
          <p>Skills : {formData.SkillSet.replaceAll(",", " ")} </p>
          <p>Posts : {formData.Posts}</p>
        </div>
      </div>
    </div>
  );
};

export default ComDashBoard;
