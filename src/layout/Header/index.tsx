import { Link } from "react-router-dom";
import { useMode } from "../../context";

import TaskifyLogo from "../../assets/image/logo/taskify.png";

import "./Header.css";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useMode();

  return (
    <header
      className={`px-2 py-4 text-xl ${isDarkTheme ? "dark" : "light"}-header`}
    >
      <div className="flex justify-between items-center">
        <h1>
          <Link to="/">
            {" "}
            <div className="w-[60px] mx-auto rounded-md overflow-hidden">
              <img src={TaskifyLogo} alt="logo" />
            </div>
          </Link>
        </h1>

        <div className="flex gap-3 items-center">
          <button
            className={`mode ${isDarkTheme ? "dark" : "light"}-mode`}
            onClick={() => toggleTheme(!isDarkTheme)}
          >
            <span
              className={`circle ${isDarkTheme ? "dark" : "light"}-circle`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
