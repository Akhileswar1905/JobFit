import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./Forms/Login.js";
import SignUp from "./Forms/SignUp";
import Auth from "./Forms/Auth.js";
import AuthCom from "./Forms/AuthCom.js";
import SignUpCom from "./Forms/SignUpCom.js";
import NotFound from "./components/NotFound.js";
import DashBoard from "./Profile/DashBoard.js";
import ComDashBoard from "./Profile/ComDashBoard.js";
import ComLogin from "./Forms/ComLogin.js";
import Companies from "./components/Companies.js";
import Navigation from "./components/Navigation.js";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext.js";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ReqAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/"} />;
  };
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authcom" element={<AuthCom />}>
          <Route index element={<SignUpCom />} />
          <Route path="signup-com" element={<SignUpCom />} />
          <Route path="login" element={<ComLogin />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<Login />} />
        </Route>

        <Route
          path="dashboard"
          element={
            <ReqAuth>
              <DashBoard />
            </ReqAuth>
          }
        />
        <Route
          path="company-dashboard"
          element={
            <ReqAuth>
              <ComDashBoard />
            </ReqAuth>
          }
        />
        <Route
          path="/companies"
          element={
            <ReqAuth>
              <Companies />
            </ReqAuth>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
