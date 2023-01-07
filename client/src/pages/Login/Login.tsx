import Input from "../../components/UIKit/Input/Input";
import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="Login__wrapper">
          <form className="Login__form">
            <h1>Introduce youreself</h1>

            <Input type="text" label="Login" name="Login" />
            <Input type="password" label="Password" name="Password" />
            <Input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;