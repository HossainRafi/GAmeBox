import logo from "./../assets/logo1.png";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

//!================ Function Starts From Here =================
function Header() {
  return (
    <div>
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 mx-5 w-full p-2 rounded-full items-center px-2">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent w-full outline-none pl-2 items-center rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
