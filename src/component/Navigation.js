
import "../css/Navigation.css";
import {  NavLink} from "react-router-dom";

const Navigation = ({ onContactClick }) => {
  return (
    <div id="NaviRoot" className="NaviRoot">
      <img
        src="https://file.rendit.io/n/dpIyLRL5HsVBzxq2WZK5.svg"
        alt="Logo"
        className="Logo"
      />
      <div className="MenuItems">
        <NavLink to="/" className={({ isActive }) => isActive ? "MenuItem active" : "MenuItem"}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? "MenuItem active" : "MenuItem"}>Products</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "MenuItem active" : "MenuItem"}>About</NavLink>
      </div>
      <button id="Btnsubscribe" className="contactButton" onClick={onContactClick}>
        Contact Us
      </button>
    </div>
  );
};

export default Navigation;
