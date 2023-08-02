import Button from "../ui/Button";
import SiteLogo from "../logos/SiteLogo";
import InputBox from "../ui/InputBox";
import Avatar from "../ui/Avatar";

import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";
import avatarImg from "../../assets/images/Mohan-muruge.jpg";

import "./Navbar.scss";
const NavBar = () => {
  return (
    <div className="nav">
      <SiteLogo />
      <div className="nav__search">
        <InputBox placeholder={"Search"} iconSrc={searchIcon} />
        <Avatar userName={"user"} avatarSrc={avatarImg} />
      </div>

      <Button text={"upload"} iconSrc={uploadIcon} />
      <Avatar userName={"user"} avatarSrc={avatarImg} />
    </div>
  );
};

export default NavBar;
