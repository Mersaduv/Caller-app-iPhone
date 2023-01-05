import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import FormComponent from "../components/FormComponent";
import ImageBy from "./../image/photo_2022-09-12_00-03-20.jpg";

import { BiSearch, BiPlus } from "react-icons/bi";
import ContactList from "../components/ContactList";
import { getAllContact } from "../services/getAllContact";

const ContactApp = () => {
  const [searchValue, setSearchValue] = useState("");
  const [contactList, setContact] = useState(null);
  const [filterState, setFilterState] = useState(null);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    const getDataContact = async () => {
      try {
        const { data } = await getAllContact();
        setFilterState(data);
        setContact(data);
        // setFilter(data);
      } catch (error) {
        console.log("checked your contactList component");
      }
    };
    getDataContact();
  }, []);
  const handlerChenges = ({ target }) => {
    setSearchValue(target.value);
    let search = target.value;
    if (search !== "") {
      const fitredSearch = filterState.filter((itemValue) => {
        return Object.values(itemValue)
          .join(" ")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setContact(fitredSearch);
    } else {
      setContact(filterState);
    }
  };
  return (
    <div className="px-3 mt-2">
      {/* selector new-conatct / header  */}
      <div className="flex flex-col ">
        <div className=" text-blue-500 hover:text-blue-400  flex justify-between">
          <span className=" cursor-pointer">Groups</span>
          <NavLink to="/header/new-contact">
            <h1 className="rounded-full hover:shadow-sm   text-3xl">
              <BiPlus />
            </h1>
          </NavLink>
        </div>
        <h1 className=" text-4xl pb-1.5  font-extrabold">Contact</h1>
      </div>
      {/* search-bar  */}
      <div className="w-full flex  items-center  rounded-lg  bg-white">
        <div
          onClick={() => setCancel((prevCancel) => !prevCancel)}
          className="w-full px-1.5 flex h-[30px] items-center  rounded-lg  bg-gray-200"
        >
          <label className="mr-1 text-lg text-gray-500" htmlFor="search">
            <BiSearch />
          </label>

          <input
            id="search"
            className=" bg-gray-200 w-full h-[30px]"
            type="text"
            onChange={handlerChenges}
            value={searchValue}
            placeholder="Search"
          />
        </div>

        {cancel && (
          <button className="bg-white pl-2 text-blue-600 active:text-gray-300">
            Cancel
          </button>
        )}
      </div>

      <hr className="my-3"></hr>

      {/* detail your card */}
      <div className="flex items-center">
        <div className="w-1/4 px-3  pb-2.5  ">
          <img src={ImageBy} alt="contact" className="w-full  rounded-full" />
        </div>
        <div className=" flex- flex-col">
          <h1 className=" text-xl font-bold">Mersad karimi</h1>
          <span className=" text-sm text-gray-400">My Card</span>
        </div>
      </div>

      {/*  List by A-Z-#  */}
      <ContactList contactList={contactList} />
    </div>
  );
};

export default ContactApp;
