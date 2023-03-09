import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../index.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./FirebaseAuth.js";
import { useState } from "react";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        console.log("sucessfully signed in");
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <Form className="form" onSubmit={handleLogin}>
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

      {error && navigate("/auth/signup")}
    </Form>
  );
}

export default Login;
