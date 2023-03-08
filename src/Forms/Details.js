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
  const [skillSet, setSkillSet] = useState("");

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
      SkillSet: skillSet,
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

        {/* Skill set */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Skills</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Skills (Technical and Non-Technical skills)"
            onChange={(e) => setSkillSet(e.target.value)}
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
              <optgroup label="Information Technology">
                <option value="Apple">Apple</option>
                <option value="Google">Google</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Alphabet">Alphabet</option>
                <option value="Tencent">Tencent</option>
                <option value="Facebook">Facebook</option>
                <option value="Samsung Electronics">Samsung Electronics</option>
                <option value="Taiwan Semiconductor Manufacturing">
                  Taiwan Semiconductor Manufacturing
                </option>
                <option value="Intel">Intel</option>
                <option value="Oracle">Oracle</option>
                <option value="Cisco Systems">Cisco Systems</option>
              </optgroup>
              <optgroup label="Health Care">
                <option value="Johnson & Johnson">Johnson & Johnson</option>
                <option value="Roche Holding">Roche Holding</option>
                <option value="Novartis">Novartis</option>
                <option value="Pfizer">Pfizer</option>
                <option value="Merck">Merck</option>
                <option value="Abbott Laboratories">Abbott Laboratories</option>
                <option value="Bristol-Myers Squibb">
                  Bristol-Myers Squibb
                </option>
                <option value="Eli Lilly">Eli Lilly</option>
                <option value="Amgen">Amgen</option>
                <option value="AstraZeneca">AstraZeneca</option>
              </optgroup>
              <optgroup label="Financials">
                <option value="Berkshire Hathaway">Berkshire Hathaway</option>
                <option value="JPMorgan Chase">JPMorgan Chase</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Bank of America">Bank of America</option>
                <option value="Wells Fargo">Wells Fargo</option>
                <option value="Alibaba Group Holding">
                  Alibaba Group Holding
                </option>
                <option value="PayPal Holdings">PayPal Holdings</option>
                <option value="Citigroup">Citigroup</option>
                <option value="American Express">American Express</option>
              </optgroup>
              <optgroup label="Energy">
                <option value="Exxon Mobil">Exxon Mobil</option>
                <option value="Chevron">Chevron</option>
                <option value="Royal Dutch Shell">Royal Dutch Shell</option>
                <option value="BP">BP</option>
                <option value="Total">Total</option>
                <option value="China Petroleum & Chemical">
                  China Petroleum & Chemical
                </option>
                <option value="ConocoPhillips">ConocoPhillips</option>
                <option value="Eni">Eni</option>
                <option value="PetroChina">PetroChina</option>
                <option value="Rosneft Oil">Rosneft Oil</option>
              </optgroup>
              <optgroup label="Consumer Discretionary">
                <option value="Amazon.com">Amazon.com</option>
                <option value="Tesla">Tesla</option>
                <option value="Walt Disney">Walt Disney</option>
                <option value="Nike">Nike</option>
                <option value="Comcast">Comcast</option>
                <option value="Home Depot">Home Depot</option>
                <option value="McDonald's">McDonald's</option>
                <option value="Netflix">Netflix</option>
                <option value="Booking Holdings">Booking Holdings</option>
              </optgroup>
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
