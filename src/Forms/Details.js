import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router";
import "../index.css";

function Details() {
  const location = useLocation();
  const signupForm = location.state.formData;
  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(null);
  const [education, setEducation] = useState("");
  const [certificates, setCertificates] = useState(null);
  const [projects, setProjects] = useState("");
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [profile, setProfile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      profilePic: profilePic,
      education: education,
      certificates: certificates,
      projects: projects,
      experience: experience,
      company: company,
      profile: profile,
      Fname: signupForm.Fname,
      Lname: signupForm.Lname,
      Email: signupForm.Email,
      Phonenumber: signupForm.Phonenumber,
    };
    navigate("/dashboard", { state: { formData } });
  };

  return (
    <div className="container">
      <h1>Details Form</h1>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group className="mb-3">
          <Form.Label className="label">First name</Form.Label>
          <Form.Control
            required
            type="text"
            className="input disabled"
            value={signupForm.Fname}
            readOnly
          />
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Last name</Form.Label>
          <Form.Control
            required
            type="text"
            className="input disabled"
            value={signupForm.Lname}
            readOnly
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Email ID</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            className="input disabled"
            value={signupForm.Email}
            readOnly
          />
        </Form.Group>

        {/* Profile Pic */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Profile Picture</Form.Label>
          <Form.Control
            required
            type="file"
            className="input"
            accept=".jpg, .jpeg, .png"
            onChange={(e) =>
              setProfilePic(URL.createObjectURL(e.target.files[0]))
            }
          />
        </Form.Group>

        {/* Profile */}
        <Form.Group className="mb-3">
          <p className="label">Profile</p>
          <textarea
            name="Profile"
            className="input"
            cols="30"
            rows="10"
            placeholder="Tell us about yourself..."
            onChange={(e) => setProfile(e.target.value)}
          ></textarea>
        </Form.Group>

        {/* Education */}
        <div className="education edu">
          <Form.Group className=" mb-3">
            <Form.Label className="label">Education</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="About Your Education"
              className="input"
              onChange={(e) => setEducation(e.target.value)}
            />
          </Form.Group>
        </div>

        {/* Experience */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Experience</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Experience"
            onChange={(e) => setExperience(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* Certifications */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Certifications</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Mention The URLs of Certifications"
            onChange={(e) => setCertificates(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* Projects */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Projects</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Mention The URLs of Projects"
            onChange={(e) => setProjects(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* DataList */}
        <Form.Group className="mb-3">
          <div>
            <label htmlFor="companies" className="form-label">
              Select the companies you want to connect
            </label>
            <select
              name="companies"
              className="input form-control
              required companies"
              multiple
              onChange={(e) => {
                const selectedOptions = Array.from(
                  e.target.selectedOptions
                ).map((option) => option.value);
                setCompany(selectedOptions);
                console.log(selectedOptions);
              }}
            >
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Amazon">Amazon</option>
              <option value="Apple">Apple</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Netflix">Netflix</option>
              <option value="Tesla">Tesla</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Adobe">Adobe</option>
              <option value="Uber">Uber</option>
              <option value="Airbnb">Airbnb</option>
              <option value="Deloitte">Deloitte</option>
              <option value="JPMorgan">JPMorgan</option>
              <option value="Cisco">Cisco</option>
              <option value="Infosys">Infosys</option>
              <option value="TCS">Tata Consultancy Services</option>
            </select>
          </div>
        </Form.Group>

        {/* Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Details;
