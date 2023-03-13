import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import "../index.css";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { app, db, storage } from "./FirebaseAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../Context/AuthContext";

function SignUp() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [file, setFile] = useState("");
  const [error, setError] = useState(false);
  const { dispatch } = useContext(AuthContext);

  // useEffect
  useEffect(() => {
    const uploadFile = () => {
      const filename = new Date().getTime() + file.name; //setting filename
      console.log(filename);
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  // Entering data
  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  // Submitting data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem("user") !== null) {
      localStorage.clear();
      localStorage.setItem("user", null);
    }
    try {
      const auth = getAuth(app);
      const res = await createUserWithEmailAndPassword(
        auth,
        data.Email,
        data.Password
      );

      await setDoc(doc(db, "userData", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
      dispatch({ type: "LOGIN", payload: data });

      localStorage.setItem("dashboard", JSON.stringify(data));
      navigate("/dashboard");
      console.log("Hello");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>SignUp Form</h1>
      <Form onSubmit={handleSubmit}>
        {/* First Name */}
        <Form.Group className="mb-3">
          <Form.Label className="label">First name</Form.Label>
          <Form.Control
            id="Fname"
            required
            type="text"
            className="input"
            onChange={handleInputChange}
            placeholder="Enter Your First name"
          />
        </Form.Group>

        {/* Last Name */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Last name</Form.Label>
          <Form.Control
            id="Lname"
            required
            type="text"
            className="input"
            placeholder="Enter Your Last name"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Email ID</Form.Label>
          <Form.Control
            id="Email"
            required
            type="email"
            placeholder="Enter email"
            className="input"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Phone Number */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            id="PhoneNumber"
            type="phone"
            className="input"
            placeholder="Enter You Phone Number"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            id="Password"
            type="password"
            className="input"
            placeholder="Enter Password"
            onChange={handleInputChange}
          />
        </Form.Group>

        {/* Profile Pic */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Profile Picture</Form.Label>
          <Form.Control
            id="profilePicture"
            required
            type="file"
            className="input"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        {/* Profile */}
        <Form.Group className="mb-3">
          <p className="label">Profile</p>
          <textarea
            id="Profile"
            name="Profile"
            className="input"
            cols="30"
            rows="10"
            placeholder="Tell us about yourself..."
            onChange={handleInputChange}
          ></textarea>
        </Form.Group>

        {/* Education */}
        <div className="education edu">
          <Form.Group className=" mb-3">
            <Form.Label className="label">Education</Form.Label>
            <Form.Control
              id="Education"
              required
              type="text"
              placeholder="About Your Education"
              className="input"
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>

        {/* Experience */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Experience</Form.Label>
          <Form.Control
            id="Experience"
            required
            type="text"
            placeholder="Your Experience"
            onChange={handleInputChange}
            className="input"
          />
        </Form.Group>

        {/* Skill set */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Skills</Form.Label>
          <Form.Control
            id="SkillSet"
            required
            type="text"
            placeholder="Your Skills (Technical and Non-Technical skills)"
            onChange={handleInputChange}
            className="input"
          />
        </Form.Group>

        {/* Certifications */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Certifications</Form.Label>
          <Form.Control
            id="Certifications"
            required
            type="text"
            placeholder="Mention The URLs of Certifications"
            onChange={handleInputChange}
            className="input"
          />
        </Form.Group>

        {/* Projects */}
        <Form.Group className="mb-3">
          <Form.Label className="label">Projects</Form.Label>
          <Form.Control
            id="Projects"
            required
            type="text"
            placeholder="Mention The URLs of Projects"
            onChange={handleInputChange}
            className="input"
          />
        </Form.Group>

        {/* Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>

        {error && navigate("/auth/login")}
      </Form>
    </div>
  );
}

export default SignUp;
