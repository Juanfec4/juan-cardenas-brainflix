import "./InputBox.scss";
const InputBox = ({ value, handleChange, placeholder, iconSrc, id, label }) => {
  return (
    <>
      {label ? (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      ) : null}
      <span className="input">
        {iconSrc ? <img src={iconSrc} className="input__icon"></img> : null}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="input__text-field"
        />
      </span>
    </>
  );
};
export default InputBox;
