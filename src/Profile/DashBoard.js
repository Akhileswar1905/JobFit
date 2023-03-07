import { useLocation } from "react-router-dom";

const DashBoard = () => {
  const location = useLocation();
  const formData = location.state.formData;
  const companies = [];
  let i = 0;
  if (formData.company) {
    formData.company.forEach((company) => {
      i++;
      if (i < formData.company.length) {
        companies.push(company);
        companies.push(",");
      } else {
        companies.push(company);
      }
    });
  }

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
          <h3>Personal Information</h3>
          <p>Email: {formData.Email} </p>
          <p>Phone number: {formData.Phonenumber}</p>
          <p>About: {formData.profile}</p>
        </div>

        <div className="dashboard-container education">
          <h3>Education</h3>
          <p>Education: {formData.education} </p>
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
      </div>
    </div>
  );
};

export default DashBoard;
