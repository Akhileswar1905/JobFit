import linkedin from "../images/linkedin2.png";

const Companies = () => {
  return (
    <>
      <h2>Company List</h2>
      <div className="company-list">
        <div className="box com-box">
          <img src={linkedin} alt="avatar" />
          <h1 className="cname">Company Name</h1>
          <p className="desc">Description</p>
        </div>
      </div>
    </>
  );
};

export default Companies;
