import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setPno] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      Fname: fname,
      Lname: lname,
      Email: email,
      Phonenumber: pno,
    };

    navigate("/emp-details", { state: { formData } });
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          {/* First Name */}
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              className="input"
              placeholder="Enter Your First Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              className="input"
              type="text"
              placeholder="Enter Your Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              className="input"
              placeholder="Enter You Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          {/* Phone Number */}
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="phone"
              className="input"
              placeholder="Enter You Phone Number"
              onChange={(e) => setPno(e.target.value)}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              className="input"
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
