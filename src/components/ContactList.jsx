import { NavLink } from "react-router-dom";

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
    // console.log(contactList);

    let contacts = <p>empty</p>;

    if (!contactList) return (contacts = <p>404!</p>);

    if (contactList) contacts = <p>Loading...</p>;

    if (contactList) {
      let datas = contactList.reduce((r, e) => {
        console.log(r);

        // get first letter of name of current element
        let names = e.name[0].toLowerCase();
        let group = names;
        // if there is no property in accumulator with this letter create it
        if (!r[group]) r[group] = { group, children: [e] };
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
      }, {});

      let result = Object.values(datas);

      let con = result.map((element) => {
        // console.log(element.group.toLowerCase());
        return (
          <div key={element.children[0].id} className="mb-4">
            <div className="border-b text-sm pt-1">
              <span className="text-gray-400">{element.group}</span>
            </div>

            {element.children.map((elmt) => (
              <NavLink to={`/header/detail-contact/${elmt.id}`}>
                <div className="border-b py-2"> {elmt.name} </div>{" "}
              </NavLink>
            ))}
          </div>
        );
      });
      return con;
    }
    return contacts;
  };
  return <div>{renderList()}</div>;
};

export default ContactList;
