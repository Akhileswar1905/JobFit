import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../index.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "./FirebaseAuth.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { doc, getDoc } from "firebase/firestore";

function ComLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleComLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user.uid);
      const docRef = doc(db, "companyData", res.user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        navigate("/company-dashboard", { state: { data } });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <Form className="form" onSubmit={handleComLogin}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      {error && navigate("/authcom/signup-com")}
    </Form>
  );
}

export default ComLogin;
