import "./Avatar.scss";
const Avatar = ({ avatarSrc, userName }) => {
  return (
    <div className="avatar__container">
      {avatarSrc ? (
        <img src={avatarSrc} alt={userName} className="avatar__image" />
      ) : (
        <div className="avatar__placeholder"></div>
      )}
    </div>
  );
};
export default Avatar;
