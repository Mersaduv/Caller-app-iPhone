const Input = ({ formik, name, id, label, type = "text" }) => {
  return (
    <div className="flex flex-col py-1 ">
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        {...formik.getFieldProps(name)}
        id={id}
        placeholder={`type your ${name}`}
        type={type}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
