import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneContact } from "../services/getOneContact";
import FormComponent from "./FormComponent";

const ContactEdit = () => {
  const params = useParams();

  const [contacts, setContact] = useState();

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
  return (
    <div>
      <FormComponent loadConatct={contacts} />
    </div>
  );
};

export default ContactEdit;
