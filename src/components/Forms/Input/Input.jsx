const Input = ({ placeholder, value, changeHandler }) => {
  const newPlaceholder = placeholder[0].toUpperCase() + placeholder.substr(1);

  return (
    <div className="mb-3 signForm__box">
      <label htmlFor={`${placeholder}-input`} className="signForm__lable">
        {placeholder === 'age' ? `${newPlaceholder} pet (template: 1 year and 3 months)` : `${newPlaceholder} pet`}
      </label>
      <input
        onChange={changeHandler}
        className="signForm__input"
        value={value}
        type="text"
        name={placeholder}
        id={`${placeholder}-input`}
      />
    </div>
  );
};

export default Input;
