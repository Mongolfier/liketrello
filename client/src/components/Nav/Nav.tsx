import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Main</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;