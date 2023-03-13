import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Forms/FirebaseAuth";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      let company = [];
      const querySnapshot = await getDocs(collection(db, "companyInfo"));
      querySnapshot.forEach((doc) => {
        company.push(doc.data());
      });
      setCompanies(company);
      setSearchResults(company);
    };
    fetchCompanies();
  }, []);

  const handlePopupClose = () => setShowPopup(false);

  const handleClick = (company) => {
    setPopupData(company);
    setShowPopup(true);
  };

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setInput(input);
    const filteredCompanies = companies.filter((company) => {
      return company.id.toLowerCase().includes(input);
    });
    setSearchResults(filteredCompanies);
  };

  return (
    <>
      <header className="head">
        <h1>Company List</h1>
        <input
          type="search"
          placeholder="search for companies..."
          className="input"
          onChange={handleSearch}
        />
      </header>
      <div className="company-list">
        {searchResults.map((company) => (
          <>
            <Card
              style={{ width: "18rem", backgroundColor: "transparent" }}
              className="com-box"
              key={parseInt(company.id)}
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
                <Button
                  onClick={() => {
                    handleClick(company);
                  }}
                  variant="primary"
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          </>
        ))}
      </div>
      <Modal show={showPopup} onHide={handlePopupClose} className="popup-box">
        <div id="content">
          <Modal.Title>{popupData && popupData.id}</Modal.Title>
          <div className="bodyText">
            <Modal.Body>{popupData && popupData.Desc}</Modal.Body>
          </div>
          <Modal.Body>
            <div className="web">
              <img
                src="https://www.pinclipart.com/picdir/big/211-2116571_website-website-logo-png-transparent-background-clipart.png"
                alt=""
                className="website"
              />
              <a href={popupData && popupData.web}>Job Portal</a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handlePopupClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Companies;
