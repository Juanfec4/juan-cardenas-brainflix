import "./Button.scss";
const Button = ({ iconSrc, text, handleClick }) => {
  return (
    <button onClick={handleClick} className="button">
      <img src={iconSrc} alt={text} className="button__icon" />
      <p className="button__text"> {text}</p>
    </button>
  );
};

export default Button;
