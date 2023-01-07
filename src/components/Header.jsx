import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col px-1   ">
      <div className="flex justify-between mb-1">
        <span>anten</span>
        <span>time:time</span>
        <span>battry</span>
      </div>
      <Outlet />

   
    </div>
  );
};

export default Header;
