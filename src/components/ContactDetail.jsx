import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneContact } from "../services/getOneContact";
import Image from "./../image/contactImg.png";
import { HiChevronLeft } from "react-icons/hi2";
import { BiMessageRounded, BiPhone, BiVideo } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { NavLink } from "react-router-dom";
const ContactDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    const showDetail = async () => {
      const { data } = await getOneContact(params.id);
      setContact(data);
    };
    try {
      showDetail();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const renderDetail = () => {
    let contactDet = <p> 404</p>;
    if (params.id) contactDet = <p> Loading........ </p>;
    if (contacts) {
      contactDet = (
        <div className="flex text-sm   flex-col px-2.5 ">
          <header>
            <div className="flex justify-between pt-2  text-lg text-blue-600">
              <div
                className=" cursor-pointer flex items-center"
                onClick={() => navigate(-1)}
              >
                <span className=" text-2xl font-bold">
                  <HiChevronLeft strokeWidth="1" />
                </span>{" "}
                Contacts
              </div>
              <div className="pr-1">
                <NavLink to={`/header/edit-contact/${contacts.id}`}>
                  Edit
                </NavLink>
              </div>
            </div>
            <div className="flex items-center mt-3.5 flex-col">
              <div className="w-1/3 px-3 pt-5 pb-3  bg-slate-500 rounded-full flex items-center justify-center">
                <img src={Image} alt="contact" className="w-11/12" />
              </div>
              <span className="cursor-pointer  font-semibold  text-2xl pt-1 pb-3">
                {contacts.name}
              </span>
            </div>
            <div className="flex text-blue-600 mt-3.5  gap-x-4 justify-between text-xl  sm:text-2xl">
              <div className="bg-white cursor-pointer  rounded-lg py-2 flex-col flex items-center flex-1 ">
                <BiMessageRounded />
                <span className="text-sm">message</span>
              </div>
              <div className="bg-white cursor-pointer flex-1 rounded-lg py-2 flex-col flex items-center ">
                <BiPhone />
                <span className="text-sm">call</span>
              </div>
              <div className="bg-white cursor-pointer flex-1 rounded-lg py-2 flex-col flex items-center ">
                <BiVideo />
                <span className="text-sm">video</span>
              </div>
              <div className="bg-white flex-1  cursor-pointer rounded-lg py-2 flex-col flex items-center ">
                <IoIosMail />
                <span className="text-sm">mail</span>
              </div>
            </div>
          </header>
          <div className="bg-white rounded-lg  flex flex-col pl-3.5 py-2.5 w-full  cursor-pointer mt-12  ">
            <span>mobile</span>
            <span className=" text-blue-600 text-lg">
              +98 {contacts.phoneNumber}
            </span>
          </div>

          {/*----------- text areaa  ------------------*/}
          <div className="bg-white rounded-lg pl-3.5 pt-1.5 border-y w-full mt-12">
            <label htmlFor="notes" className="text-sm pt-1  block">
              Notes
            </label>
            <textarea
              name="notes"
              value={contacts.notes}
              className="w-full  h-24   resize-none outline-none"
            />
          </div>

          <div className="bg-white rounded-lg border-y flex flex-col w-full   mt-12 border-gray-100">
            <span className=" border-b py-1.5  cursor-pointer ml-4 text-blue-600 ">
              Send Message
            </span>
            <span className=" border-b py-1.5  cursor-pointer ml-4 text-blue-600 ">
              Share Contact
            </span>
            <span className=" border-b py-1.5 cursor-pointer border-white  ml-4 text-blue-600 ">
              Add to Favorites
            </span>
          </div>

          <div className="bg-white rounded-lg border-y w-full  cursor-pointer mt-12  py-1.5  border-gray-100">
            <span className=" ml-4 text-blue-600 ">Add to Emergency</span>
          </div>

          <div className="bg-white rounded-lg border-y w-full  cursor-pointer mt-12  py-1.5  border-gray-100">
            <span className=" ml-4 text-blue-600 ">Share My Location</span>
          </div>

          <div className="bg-white rounded-lg border-y w-full  cursor-pointer mt-12  mb-40  py-1.5  border-gray-100">
            <span className=" ml-4 text-red-600 ">Block this Caller</span>
          </div>
        </div>
      );
    }
    return contactDet;
  };
  return (
    <div className=" rounded-t-2xl bg-gray-100 shad w-full">
      {renderDetail()}
    </div>
  );
};

export default ContactDetail;
