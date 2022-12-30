import { useState } from "react";
import { addNewContact } from "../services/addNewContact";
;
const FormContact = () => {
  const [inputValue, setValue] = useState({
    name: "",
    number: 0,
    email: "",
  });
  // const history=
  const chengeHandler = (e) => {
    setValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNewContact(inputValue);
    // history("/");
  };
  return (
    <div>
      
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <label htmlFor="name">name </label>
            <input
              name="name"
              type="text"
              placeholder="type name.."
              value={inputValue.name}
              onChange={chengeHandler}
              id="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">email </label>
            <input
              name="email"
              type="text"
              placeholder="type email.."
              value={inputValue.email}
              onChange={chengeHandler}
              id="email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="number">your number </label>
            <input
              name="number"
              type="number"
              placeholder="type number.."
              value={inputValue.number}
              onChange={chengeHandler}
              id="number"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 mt-4 rounded-md px-6 py-1 text-white"
        >
          Added
        </button>
      </form>
    </div>
  );
};

export default FormContact;
