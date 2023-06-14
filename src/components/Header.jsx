import { useState } from "react";
import logo from "./../assets/logo1.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";

//!================ Function Starts From Here =================
function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-3">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Your Favourite Games"
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
        />
      </div>
      <div>
        {toggle ? (
          <HiMoon className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full" />
        ) : (
          <HiSun
            className="text-[35px] cursor-pointer
       bg-gray-200 text-black p-1 rounded-full "
          />
        )}
      </div>
    </div>
  );
}

export default Header;
