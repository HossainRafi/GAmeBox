import logo from "./../assets/logo1.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

//!================ Function Starts From Here =================
function Header() {
  return (
    <div>
      <img src={logo} width={60} height={60} />
      <div>
        <HiOutlineMagnifyingGlass />
        <input type="text" />
      </div>
    </div>
  );
}

export default Header;
