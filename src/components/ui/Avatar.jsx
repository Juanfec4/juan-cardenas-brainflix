import "./Avatar.scss";
const Avatar = ({ avatarSrc, userName }) => {
  return (
    <div className="avatar__container">
      <img src={avatarSrc} alt={userName} className="avatar__image" />
    </div>
  );
};
export default Avatar;
