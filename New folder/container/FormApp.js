import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import Input from "../components/common/Input";
import RadioInput from "../components/common/RadioInput";
import { getAllUsers } from "../services/getAllUsers";
import SelectComponent from "../components/common/SelectComponent";
import CheckInput from "../components/common/CheckInput";
import TermsComponent from "../components/common/TermsComponent";
const validationSchema = Yup.object({
  name: Yup.string().required("empty name").min(4),
  email: Yup.string().email("invalid @").required("empty email"),
  password: Yup.string()
    .required("empty password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("empty confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords not match"),
  age: Yup.string().required("empty age").max(2, "wtf man?").nullable(),
  gender: Yup.string().required("unselected gender"),
  country: Yup.string().required("please select nationalty"),
  interst: Yup.array().min(1).required("select one interest"),
  terms:Yup.boolean().oneOf([true],'please confirm terms'),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
  gender: "",
  country: "",
  interst: [],
  terms: false,
};

//options-
const interstBox = [
  { value: "React-js", label: "React.js" },
  { value: "ReactNative", label: "React Native" },
];

const selectOption = [
  { value: "", label: "please select" },
  { value: "USA", label: "united states" },
  { value: "middle", label: "sag doni" },
  { value: "china", label: "Chine" },
  { value: "india", label: "indostan" },
];

// const options = [
//   { value: "", label: "please select" },
//   { value: "USA", label: "united states" },
//   { value: "middle", label: "sag doni" },
//   { value: "china", label: "Chine" },
//   { value: "india", label: "indostan" },
// ];

const radioOption = [
  { value: "0", label: "male-" },
  { value: "1", label: "female-" },
];
const FormApp = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await getAllUsers();
  //       setUserData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);
  const [users, setUserData] = useState(null);
  console.log(users);
  // const [data, setData] = useState(false);
  const formik = useFormik({
    initialValues: users || initialValues,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col  p-4 items-center">
      <form onSubmit={formik.handleSubmit} className="w-1/2">
        <h2>Sign-Up</h2>

        {/* form-controls */}
        <Input formik={formik} name="name" label="Name-" id="name" />
        <Input formik={formik} name="email" label="Email-" id="email" />
        <Input formik={formik} name="age" label="age-" id="age" type="number" />
        <Input
          formik={formik}
          name="password"
          label="password-"
          id="password"
          type="password"
        />
        <Input
          formik={formik}
          name="confirmPassword"
          label="confirmPassword-"
          id="confirmPassword"
          type="password"
        />

        <RadioInput name="gender" formik={formik} radioOption={radioOption} />

        <CheckInput name="interst" formik={formik} interstBox={interstBox} />

        <SelectComponent
          formik={formik}
          selectOption={selectOption}
          name="country"
        />
        <hr></hr> 

        <TermsComponent name="terms" formik={formik} />

        <button
          type="submit"
          className=" border my-2 py-1.5 px-3 hover:shadow-lg"
          disabled={!formik.isValid}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default FormApp;
