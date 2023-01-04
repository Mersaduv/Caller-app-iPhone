import { NavLink, Outlet } from "react-router-dom";
import FormComponent from "../components/FormComponent";

const ContactApp = () => {
  return (
    <div>
      <div className="flex justify-between px-3">
        

        
      </div>
      <Outlet />

      {/* <FormComponent /> */}
    </div>
  );
};

export default ContactApp;
