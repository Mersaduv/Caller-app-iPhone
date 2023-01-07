import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Input from "./common/Input";
import { addNewContact } from "../services/addNewContact";
import { BiUser, BiPlus, BiMinus } from "react-icons/bi";
import Image from "./../image/contactImg.png";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteContact } from "../services/deleteContact";
import { useEffect } from "react";
const validationSchema = Yup.object({
  name: Yup.string().min(2).required(), //can you added required message
});
const initialValues = {
  name: "",
  lastName: "",
  company: "",
  phoneNumber: "",
  email: "",
  notes: "",
};

const FormComponent = ({ loadConatct }) => {
  const [showNum, setshowNum] = useState(false);
  const [showEmail, setshowEmail] = useState(false);
  const navigate = useNavigate();

  // if laod page edition show phonenumber/email contact input
  useEffect(() => {
    if (loadConatct) {
      setshowEmail((hidden) => !hidden);
      setshowNum((hidden) => !hidden);
    }
  }, [loadConatct]);

  const formik = useFormik({
    initialValues: loadConatct || initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        await addNewContact(values);
      } catch (error) {
        console.log("please checked your data");
      }
      navigate(-1);
    },
  });

  const deletedHandler = async () => {
    try {
      await deleteContact(loadConatct.id);
      navigate(-2)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="flex flex-col  h-screen  gap-y-4 z-50 items-center rounded-t-2xl formshad  w-full bg-gray-100"
        onSubmit={formik.handleSubmit}
      >
        {/* header bar  */}
        <div className="w-full flex px-2.5 py-3 justify-between">
          <div
            className="text-blue-600 cursor-pointer "
            onClick={() => navigate(-1)}
          >
            Cancel
          </div>
          <h2 className="font-bold">New Contact</h2>
          <button
            className="font-bold text-blue-600 "
            disabled={!formik.isValid}
            type="submit"
          >
            Done
          </button>
        </div>
        <div className="flex items-center mt-3.5 flex-col">
          <div className="w-1/2 px-3 pt-5 pb-3  bg-slate-500 rounded-full flex items-center justify-center">
            <img src={Image} alt="contact" className="w-11/12" />
          </div>
          <span className="text-blue-600  cursor-pointer text-sm pt-1 pb-3">
            Add Photo
          </span>
        </div>
        <div className="w-full border-y  bg-white">
          <Input name="name" textPlaceHolder="First name" formik={formik} />
          <Input name="lastName" textPlaceHolder="Last name" formik={formik} />
          <Input
            name="company"
            className=" border-white"
            textPlaceHolder="Company"
            formik={formik}
          />
        </div>
        <div className="bg-gray-100 w-full mt-4    ">
          {/* -------------- get  Number mobile -------------*/}
          <div className="bg-white border-t w-full   mt-8  border-gray-100">
            {/* input creating Phone number */}
            <div className="flex items-center w-full   border-b">
              {showNum && (
                <div className="py-1.5 pl-3  flex items-center gap-x-3.5  pr-1.5 border-r  ">
                  <span
                    onClick={() => setshowNum((rem) => !rem)}
                    className="bg-red-500   cursor-pointer flex items-center justify-center h-[18px] w-[18px] text-white rounded-full  "
                  >
                    <BiMinus />
                  </span>
                  <span className="text-blue-600  ">mobile</span>
                </div>
              )}
              {showNum && (
                <Input
                  className=" border-white   "
                  name="phoneNumber"
                  type="number"
                  textPlaceHolder="Phone"
                  formik={formik}
                />
              )}
            </div>
            {/* onclick showNum create contact  */}
            <div className="py-1.5     pl-3 flex items-center gap-x-3.5  border-b">
              <span
                onClick={() => setshowNum((hidden) => !hidden)}
                className="bg-green-500       flex items-center justify-center h-[18px] w-[18px] text-white rounded-full  cursor-pointer  "
              >
                <BiPlus />
              </span>
              <span className="">add phone</span>
            </div>
          </div>

          {/* -------------- get  Email  -------------*/}
          <div className="bg-white border-t w-full  mt-12   border-gray-100">
            {/* input creating Email */}
            <div className="flex items-center w-full border-b">
              {showEmail && (
                <div className="py-1.5 pl-3 flex items-center gap-x-3.5  pr-1.5 border-r  ">
                  <span
                    onClick={() => setshowEmail((rem) => !rem)}
                    className="bg-red-500  cursor-pointer  flex items-center justify-center h-[18px] w-[18px] text-white rounded-full  "
                  >
                    <BiMinus />
                  </span>
                  <span className="text-blue-600 ">home</span>
                </div>
              )}
              {showEmail && (
                <Input
                  className=" border-white  "
                  name="email"
                  textPlaceHolder="Email"
                  formik={formik}
                />
              )}
            </div>
            {/* onclick showNum create contact  */}
            <div className="py-1.5    pl-3 flex items-center gap-x-3.5  border-b">
              <span
                onClick={() => setshowEmail((hidden) => !hidden)}
                className="bg-green-500     flex items-center justify-center h-[18px] w-[18px] text-white cursor-pointer  rounded-full  "
              >
                <BiPlus />
              </span>
              <span>add email</span>
            </div>
          </div>

          {/*----------- text areaa  ------------------*/}
          <div className="pl-3 pt-1.5  bg-white border-y w-full mt-12">
            <label htmlFor="notes" className="text-sm pt-1  block">
              Notes
            </label>
            <textarea
              name="notes"
              {...formik.getFieldProps("notes")}
              id="notes"
              className="w-full  h-24  resize-none outline-none"
            />
          </div>

          <div className="bg-white border-t w-full  mt-12 mb-24    py-1.5  border-gray-100">
            <span className=" ml-4 text-blue-600 cursor-pointer">
              add field
            </span>
          </div>

          {/* // if laod page edition show delete button */}
          {loadConatct && (
            <div
              onClick={deletedHandler}
              className="bg-white border-t w-full  cursor-pointer  mt-12   mb-40  py-1.5  border-gray-100"
            >
              <span className=" ml-4 text-red-600 ">Delete Contact</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
