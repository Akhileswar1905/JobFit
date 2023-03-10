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
import ComDetails from "./Forms/ComDetails.js";

function App() {
  const currentUser = true;
  const ReqAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/auth/signup"} />;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="authcom" element={<AuthCom />}>
          <Route index element={<SignUpCom />} />
          <Route path="signup-com" element={<SignUpCom />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="auth" element={<Auth />}>
          <Route index element={<SignUp />} />
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="com-details" element={<ComDetails />} />
        <Route
          path="dashboard"
          element={
            <ReqAuth>
              <DashBoard />
            </ReqAuth>
          }
        />
        <Route path="company-dashboard" element={<ComDashBoard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
