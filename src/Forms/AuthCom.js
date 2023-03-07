import "../index.css";
import { NavLink, Outlet } from "react-router-dom";

const AuthCom = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <NavLink className={"link"} to="signup-com">
              Sign Up
            </NavLink>
            <NavLink className={"link"} to="login">
              Login
            </NavLink>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthCom;
