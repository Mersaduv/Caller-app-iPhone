import { NavLink } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
const Header = () => {
  return (
    <div className="flex flex-col px-1 ">
      <div className="flex justify-between mb-1">
        <span>anten</span>
        <span>time:time</span>
        <span>battry</span>
      </div>
      <div className="flex items-center justify-between px-2">
        <h1 className=" text-4xl  font-extrabold">Contact</h1>
        <div className=" text-blue-500 hover:text-blue-400 ">
          <NavLink to="/contact/new-contact">
            <h1 className="rounded-full hover:shadow-sm   text-3xl">
              <BiPlus />
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
