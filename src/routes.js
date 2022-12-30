import ContactDetail from "./components/ContactDetail";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import FormContact from "./components/FormContact";
import ContactApp from "./container/ContactApp";

const routs = [
  { path: "/", element: <ContactApp /> },
  { path: "/details/:id", element: <ContactDetail /> },
  { path: "/edit/:id", element: <EditContact /> },
  //   { path: "/form", render: <FormContact /> },
  //   { path: "/list", render: <ContactList /> },
];

export default routs;
