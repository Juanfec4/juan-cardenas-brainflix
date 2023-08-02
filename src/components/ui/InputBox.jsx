import "./InputBox.scss";
const InputBox = ({ value, handleChange, placeholder, iconSrc }) => {
  return (
    <span className="input">
      {iconSrc ? <img src={iconSrc} className="input__icon"></img> : null}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="input__text-field"
      />
    </span>
  );
};
export default InputBox;
