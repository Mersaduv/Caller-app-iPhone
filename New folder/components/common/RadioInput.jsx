const RadioInput = ({ formik, label, radioOption, name }) => {
  return (
    <div className="flex p-1 ">
      {radioOption.map((item) => (
        <div key={item.value} className="mr-2">
          <label htmlFor={item.value}>{item.label}</label>
          <input
            name={name}
            onChange={formik.handleChange}
            id={item.value}
            checked={formik.values[name] === item.value}
            type="radio"
            value={item.value}
          />
          {formik.errors[name] && formik.touched[name] && (
            <div className="text-red-600">{formik.errors.gender}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RadioInput;
