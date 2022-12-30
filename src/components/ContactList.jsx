import logo from "../image/logo.png";
import { BiEdit, BiTrash } from "react-icons/bi";
import { deleteContact } from "../services/deleteContact";

import { getAllContact } from "../services/getAllContact";
import { Link, Routes, Route} from "react-router-dom";
// import EditContact from "./EditContact";
const ContactList = ({ name, email, number, id }) => {
  const deleteHandler = async () => {
    try {
      await deleteContact(id);
      getAllContact();
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  return (
    <div className="flex  justify-between border-t border-b mt-4 py-3 text-base">
      <Link to={`/details/${id}`}>
        <div className="flex">
          <div className="w-9 h-9 mt-0.5">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col ml-1">
            <span className=" font-bold">{name}</span>
            <div className="flex gap-x-3 -mt-2">
              <span>{number}</span>
              <span className=" text-slate-500">{email}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-2 ">
        <Link to={`/edit/${id}`}>
          <button className=" text-blue-500 mr-4 text-2xl">
            <BiEdit />
          </button>
        </Link>

        {/* <Routes>
        <Route path="/edit" element={<EditContact />} />
 
      </Routes> */}

        <button onClick={deleteHandler} className=" text-red-500 text-2xl">
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default ContactList;
