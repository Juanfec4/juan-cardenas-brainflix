import "./IconCounter.scss";
const IconCounter = ({ iconSrc, alt, count }) => {
  return (
    <div className="icon-counter">
      <img src={iconSrc} alt={alt} className="icon-counter__icon" />
      <p className="icon-counter__count">{count}</p>
    </div>
  );
};

export default IconCounter;
