import "./Login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="container">
        <div className="Login__wrapper">
          <form className="Login__form">
            <h1>Introduce youreself</h1>

            <div>
              <label htmlFor="login" >Login</label>
              <input id="login" type="text" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;