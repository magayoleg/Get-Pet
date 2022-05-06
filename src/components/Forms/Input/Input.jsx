const Input = ({ placeholder, value, changeHandler, name, type = 'text'}) => {
  const newPlaceholder = placeholder[0].toUpperCase() + placeholder.substr(1);

  return (
    <div className="mb-3 signForm__box">
      <label htmlFor={`${placeholder}-input`} className="signForm__lable">
        {placeholder === 'age' ? `${newPlaceholder} (Пример: 1 год и 3 месяца)` : `${newPlaceholder}`}
      </label>
      <input
        onChange={changeHandler}
        className="signForm__input"
        value={type === 'file' ? null : value}
        type={type}
        name={name}
        id={`${placeholder}-input`}
      />
    </div>
  );
};

export default Input;
