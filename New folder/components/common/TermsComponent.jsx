const TermsComponent = ({ name, formik }) => {
  return (
    <div>
      <input
        name={name}
        id="term"
        type="checkbox"
        checked={formik.values[name]}
        value={true}
        onChange={formik.handleChange}
      />
      <label htmlFor="term" className=" text-blue-600 ml-1 ">Terms condation</label>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis quaerat illum, distinctio, a earum ipsa accusamus odio repudiandae officia, quia veniam id laborum! Perferendis commodi eum vitae veniam dolore.</p>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-600">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default TermsComponent;
