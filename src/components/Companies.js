import React, { useState, useEffect } from "react";
import linkedin from "../images/linkedin2.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Forms/FirebaseAuth";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      const querySnapshot = await getDocs(collection(db, "companyInfo"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCompanies(data);
    };
    fetchCompanies();
  }, []);
  const handleClick = (e) => {
    console.log(e.target.parentNode);
    // navigate("/details");
  };
  return (
    <>
      <h1>Company List</h1>
      <div className="company-list">
        {companies.map((company) => (
          <Card
            style={{ width: "18rem", backgroundColor: "transparent" }}
            className="com-box"
          >
            <Card.Img
              variant="top"
              src={company.img}
              className="avatar"
              alt="avatar"
            />
            <Card.Title className="com-name">{company.id}</Card.Title>
            <Card.Body>
              <Card.Text>{company.Desc.substr(0, 100) + "..."}</Card.Text>
              <Button onClick={handleClick} variant="primary">
                Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Companies;
