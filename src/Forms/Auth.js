import "../index.css";
import { NavLink, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <NavLink className={"link"} to="signup">
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

export default Auth;
