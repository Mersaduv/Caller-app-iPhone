const Input = ({ name, formik, textPlaceHolder, type = "text", className }) => {
  return (
    <div className="pl-3 w-full  ">
      <input
        className={
          formik.errors[name] && formik.touched[name]
            ? " border-red-600 border-b w-full"
            : `border-b w-full ${className}`
        }
        type={type}
        {...formik.getFieldProps(name)}
        placeholder={textPlaceHolder}
      />
    </div>
  );
};

export default Input;
