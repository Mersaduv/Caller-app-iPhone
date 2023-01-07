import { NavLink } from "react-router-dom";
import {
  BiUserCircle,
  BiStar,
  BiTime,
  BiDialpad,
  BiVoicemail,
} from "react-icons/bi";
const Footer = () => {
  const pageItems = [
    { to: "/favorites", name: "Favorites", icon: <BiStar /> },
    { to: "/recents", name: "Recents", icon: <BiTime /> },
    { to: "/contact", name: "Contact", icon: <BiUserCircle /> },
    { to: "/Keypad", name: "Keypad", icon: <BiDialpad /> },
    { to: "/voicemail", name: "Voicemail", icon: <BiVoicemail /> },
  ];
  return (
    <div className="bg-gray-100 text-sm flex border-t-2 shadow-xl justify-between  px-2 pt-1 pb-0.5 bottom-0 fixed   mx-auto max-w-md w-full ">
      {pageItems.map((page) => (
        <NavLink
          key={page.name}
          to={page.to}
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
        >
          <div className="flex  items-center flex-col ">
            <span className=" text-2xl">{page.icon}</span>
            {page.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Footer;
