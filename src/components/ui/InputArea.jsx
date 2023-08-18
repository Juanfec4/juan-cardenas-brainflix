import "./InputArea.scss";

const InputArea = ({ value, handleChange, placeholder, id, label, customRef }) => {
  return (
    <span className="input-area">
      <label htmlFor={id} className="input-area__label">
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="input-area__content"
        ref={customRef}
      ></textarea>
    </span>
  );
};
export default InputArea;
