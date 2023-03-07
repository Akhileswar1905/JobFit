import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router";
import "../index.css";

function ComDetails() {
  const location = useLocation();
  const signupForm = location.state.formData;
  const navigate = useNavigate();

  const [experience, setExperience] = useState("");
  const [profile, setProfile] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [skillSet, setSkillSet] = useState("");
  const [posts, setPosts] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      experience: experience,
      profile: profile,
      Fname: signupForm.Fname,
      Lname: signupForm.Lname,
      Email: signupForm.Email,
      Phonenumber: signupForm.Phonenumber,
      ProfilePic: profilePic,
      SkillSet: skillSet,
      Contact: contact,
      Posts: posts,
    };
    navigate("/company-dashboard", { state: { formData } });
  };

  return (
    <div className="container">
      <h1>ComDetails Form</h1>
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

        {/* Company name */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Company Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Company Name"
            className="input"
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <p className="label">Company Description</p>
          <textarea
            name="Profile"
            className="input"
            cols="30"
            rows="10"
            placeholder="Tell us about your company..."
            onChange={(e) => setProfile(e.target.value)}
          ></textarea>
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

        {/* Skills Required */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Skills</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Skills Required"
            onChange={(e) => setSkillSet(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* Posts Recruitments */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Recruitment Posts</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Posts"
            onChange={(e) => setPosts(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* Contact Details */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Contact Details</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Contact Details"
            onChange={(e) => setContact(e.target.value)}
            className="input"
          />
        </Form.Group>

        {/* Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ComDetails;
