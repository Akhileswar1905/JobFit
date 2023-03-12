import { useEffect, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
const News = () => {
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const apiKey = "908a1d63775a4c2eb327742ca7e89af9";

  useEffect(() => {
    try {
      const fetchNews = async () => {
        const res = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=908a1d63775a4c2eb327742ca7e89af9"
        );
        const data = await res.json();
        console.log(data.articles);
        setSearchResults(data.articles);
      };
      fetchNews();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${input}&language=en&apiKey=${apiKey}`
      );
      const data = await res.json();
      console.log(data.articles);
      setSearchResults(data.articles);
    };
    fetchNews();
  };

  const handlePopupClose = () => setShowPopup(false);

  const handleClick = (company) => {
    setPopupData(company);
    setShowPopup(true);
  };
  return (
    <div>
      <header className="head">
        <h1>News</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for news..."
          />
        </form>
      </header>
      <div className="company-list">
        {searchResults.map((news) => (
          <>
            <Card
              style={{ width: "18rem", backgroundColor: "transparent" }}
              className="com-box"
            >
              <Card.Img
                variant="top"
                src={news.urlToImage}
                className="avatar"
                alt="avatar"
              />
              <Card.Title className="com-name">{news.title}</Card.Title>
              <Card.Body>
                <Button
                  onClick={() => {
                    handleClick(news);
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
          <Modal.Title>{popupData && popupData.title}</Modal.Title>
          <Modal.Body>{popupData && popupData.content}</Modal.Body>
          <Modal.Body>
            <div className="web">
              <img
                src="https://www.pinclipart.com/picdir/big/211-2116571_website-website-logo-png-transparent-background-clipart.png"
                alt=""
                className="website"
              />
              <a href={popupData && popupData.url}>News Link</a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handlePopupClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default News;
