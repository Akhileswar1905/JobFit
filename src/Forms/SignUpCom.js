import { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { app, db, storage } from "./FirebaseAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../Context/AuthContext";

function SignUpCom() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [file, setFile] = useState("");
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

      await setDoc(doc(db, "companyData", res.user.uid), {
        ...data,
        timestamp: serverTimestamp(),
      });
      dispatch({ type: "LOGIN", payload: data });

      localStorage.setItem("company-dashboard", JSON.stringify(data));
      navigate("/company-dashboard");
    } catch (err) {
      console.log(err);
      setError(true);
    }
    navigate("/company-dashboard", { state: { data } });
  };

  return (
    <div>
      <div className="child">
        <Form onSubmit={handleSubmit}>
          {/* First Name */}
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="Fname"
              required
              type="text"
              className="input"
              placeholder="Enter Your First Name"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="Lname"
              required
              className="input"
              type="text"
              placeholder="Enter Your Last Name"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Business Email</Form.Label>
            <Form.Control
              id="Email"
              required
              type="email"
              className="input"
              placeholder="Enter You Business Email"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="Password"
              required
              type="password"
              className="input"
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
          </Form.Group>

          {/* Company name */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Company Name</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              id="CompanyName"
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
              onChange={handleInputChange}
              id="Description"
              name="Profile"
              className="input"
              cols="30"
              rows="10"
              placeholder="Tell us about your company..."
            ></textarea>
          </Form.Group>

          {/* Profile Pic */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Profile Picture</Form.Label>
            <Form.Control
              onChange={(e) => setFile(e.target.files[0])}
              id="CompanyPicture"
              required
              type="file"
              className="input"
              accept=".jpg, .jpeg, .png"
            />
          </Form.Group>

          {/* Experience */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Experience</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              id="Experience"
              required
              type="text"
              placeholder="Your Experience"
              className="input"
            />
          </Form.Group>

          {/* Skills Required */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Skills</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              id="SkillsRequired"
              required
              type="text"
              placeholder="Skills Required"
              className="input"
            />
          </Form.Group>

          {/* Posts Recruitments */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Recruitment Posts</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              id="Posts"
              required
              type="text"
              placeholder="Posts"
              className="input"
            />
          </Form.Group>

          {/* Contact Details */}
          <Form.Group className="mb-3">
            <Form.Label className="label">Contact Details</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              id="ContactInfo"
              required
              type="text"
              placeholder="Contact Details"
              className="input"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          {error && navigate("/authcom/login")}
        </Form>
      </div>
    </div>
  );
}

export default SignUpCom;
