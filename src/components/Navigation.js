import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
function Navigation() {
  let nav;
  if (localStorage.getItem("user") == null) {
    nav = "/";
  } else {
    nav = localStorage.getItem("nav");
  }
  return (
    <Navbar
      sticky="top"
      className="navigation"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="nav-box">
        <NavLink className={"nav-link brand"} to="/">
          <img src={logo} alt="" />
          JobFit
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink className={"nav-link"} to="/">
              Home
            </NavLink>
            <NavLink className={"nav-link"} to={nav}>
              Dashboard
            </NavLink>
            <NavLink className={"nav-link"} to="companies">
              Companies
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
