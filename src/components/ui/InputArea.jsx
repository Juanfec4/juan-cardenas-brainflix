import "./InputArea.scss";

const InputArea = ({ value, handleChange, placeholder, id, label }) => {
  return (
    <>
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
      ></textarea>
    </>
  );
};
export default InputArea;
