const SelectComponent = ({ formik, selectOption, name }) => {
  return (
    <div className="flex p-1 ">
      <select className="mr-2" {...formik.getFieldProps(name)} name={name}>
        {selectOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectComponent;
