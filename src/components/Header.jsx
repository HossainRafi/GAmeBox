import { useContext, useState } from "react";
import logo from "./../assets/logo1.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

//!================ Function Starts From Here =================
function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={80} height={80} />
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-3">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Your Favourite Games"
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
        />
      </div>

      {/* ================= Theme Toggle Buttons ================ */}
      <div>
        {theme == "dark" ? (
          <HiSun
            className="text-[35px] cursor-pointer
       bg-gray-200 text-black p-1 rounded-full "
            onClick={() => setTheme("light")}
          />
        ) : (
          <HiMoon
            className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
