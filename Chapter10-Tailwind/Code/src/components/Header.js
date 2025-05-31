import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-md h-16 sm:h-20">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-24 h-16 sm:h-20 sm:w-28" src={LOGO_URL}></img>
        </Link>
      </div>

      <div className=" flex items-center">
        <ul className="flex p-2 items-center">
          <li className="hidden sm:block px-4">Online Status:{onlineStatus ? "✅" : "❌"}</li>
          <li className="px-2 sm:px-4 hover:tracking-wide hover:font-medium">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2 sm:px-4 hover:tracking-wide hover:font-medium">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hidden sm:block px-4 hover:tracking-wide hover:font-medium">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2 sm:px-4 hover:tracking-wide hover:font-medium">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="hidden sm:block px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 hover:px-6 transition-all duration-300 ease-in-out"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
