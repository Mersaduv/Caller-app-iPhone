const CheckInput = ({ formik, name, interstBox }) => {
  return (
    <div className="py-1 flex gap-x-2">
      {interstBox.map((item) => (
        <div key={item.value} >
          <label htmlFor={item.value} >{item.label}-</label>
          <input
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values.interst.includes(item.value)}
            name={name}
            id={item.value}
            type="checkbox"
          />
        </div>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default CheckInput;
