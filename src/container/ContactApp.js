import { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import FormContact from "../components/FormContact";
import { getAllContact } from "../services/getAllContact";

const ContactApp = () => {
  const [contacts, setContact] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearchValue] = useState("");
  const [allItem, setAllItem] = useState(null);
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await getAllContact();
        setContact(data);
        setAllItem(data);
      } catch (error) {
        setError(error);
      }
    };

    getContact();
  }, []);

  const chengeHandler = (e) => {
    setSearchValue(e.target.value);

    // console.log(allItem.map((i) => console.log(i)))
    const srch = e.target.value;
    if (srch !== "") {
      const filterd = allItem.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
        //  return  console.log(Object.values(contact).join(" "));
      });
      setContact(filterd);
    } else {
      setContact(allItem);
    }
  };
  const renderConatct = () => {
    let contactLoad = <p>Loading......</p>;

    if (error) {
      contactLoad = <p className="text-center">404</p>;
    }

    if (contacts && !error) {
      contactLoad = contacts.map((contact) => (
        <ContactList
          key={contact.id}
          id={contact.id}
          name={contact.name}
          email={contact.email}
          number={contact.number}
        />
      ));
    }
    return contactLoad;
  };

  return (
    <div className="flex flex-col px-20 text-xl  w-full  ">
      <div>
        <label htmlFor="search">search</label> 
        
        <input
          type="text"
          placeholder="type..."
          value={search}
          onChange={chengeHandler}
        />
      </div>
      <div>
        <FormContact />
      </div>
      <div className="gap-y-8">{renderConatct()}</div>

    </div>
  );
};

export default ContactApp;
