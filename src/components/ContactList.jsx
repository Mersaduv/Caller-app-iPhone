import { useState } from "react";
import { useEffect } from "react";
import { getAllContact } from "../services/getAllContact";

const ContactList = ({ contactList }) => {
//   const [contactList, setContact] = useState(null);
//   const [filterState, setFilterState] = useState(null);

  //   const [filter, setFilter] = useState(null);
//   useEffect(() => {
//     const getDataContact = async () => {
//       try {
//         const { data } = await getAllContact();
      
//       } catch (error) {
//         console.log("checked your contactList component");
//       }
//     };
//     getDataContact();
//   }, []);

//   const handlerChenges = ({ target }) => {
//     setSearchValue(target.value);
//     if (searchValue !== "") {
//       const fitredSearch = filterState.filter((itemValue) => {
//         return Object.values(itemValue)
//           .join(" ")
//           .toLowerCase()
//           .includes(searchValue.toLowerCase());
//       });
//       return fitredSearch;
//     } else {
//     }
//   };

  const renderList = () => {
    let contacts = <p>empty</p>;
    // let a = "A";
    if (!contactList) return (contacts = <p>404!</p>);

    if (contactList) contacts = <p>Loading...</p>;
    // filter.filter((con) => {

    //   return console.log(con.name.toLowerCase().includes("a"));
    // });
    contacts = contactList.map((contact) => (
      <div key={contact.id}>
        <div className="border-b py-2">{contact.name}</div>
        {/* {console.log(contact)} */}
      </div>
    ));

    return contacts;
  };
  return (
    <div>
      <div className="border-b text-sm pt-1">
        <span className="text-gray-400">A</span>
      </div>
      {renderList()}
    </div>
  );
};

export default ContactList;
