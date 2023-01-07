import {
  Route,
  Routes,
} from "react-router-dom";
import CreateAccount from "../../pages/CreateAccount/CreateAccount";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import NotFound from "../../pages/NotFound/NotFound";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create_account" element={<CreateAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};


export default AuthRouter;