import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <ul className="nav">
            <NavLink className={"link"} to="login">
              Login
            </NavLink>
            <NavLink className={"link"} to="signup">
              Sign Up
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
