import { useEffect, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
const News = () => {
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const apiKey = "d60b0588-d2ec-46b2-9b5c-1cef5f3e3b00";

  useEffect(() => {
    try {
      const fetchNews = async () => {
        const res = await fetch(
          `https://content.guardianapis.com/search?section=technology&show-fields=headline,trailText,thumbnail,bodyText&order-by=newest&page-size=20&api-key=${apiKey}`
        );
        const x = await res.json();
        console.log(x.response.results);
        const data = x.response.results;
        setSearchResults(data);
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
        `https://content.guardianapis.com/search?section=technology&q=${input}%20recruitment&api-key=${apiKey}&show-fields=thumbnail,headline,content,bodyText&order-by=newest&page-size=20

        `
      );
      const x = await res.json();
      console.log(x.response.results);
      const data = x.response.results;
      setSearchResults(data);
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
                src={news.fields.thumbnail}
                className="avatar"
                alt="avatar"
              />
              <Card.Title className="com-name">
                {news.fields.headline}
              </Card.Title>
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
          <Modal.Title>{popupData && popupData.fields.headline}</Modal.Title>
          <Modal.Body>{popupData && popupData.fields.bodyText}</Modal.Body>
          <Modal.Body>
            <div className="web">
              <img
                src="https://www.pinclipart.com/picdir/big/211-2116571_website-website-logo-png-transparent-background-clipart.png"
                alt=""
                className="website"
              />
              <a href={popupData && popupData.webUrl}>News Link</a>
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
