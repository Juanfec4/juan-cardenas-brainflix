import Button from "../ui/Button";
import SiteLogo from "../logos/SiteLogo";
import InputBox from "../ui/InputBox";
import Avatar from "../ui/Avatar";

import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";

import { useNavigate } from "react-router-dom";

import "./Navbar.scss";
const NavBar = ({ avatarImg, userName }) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <SiteLogo handleClick={() => navigate("../")} />
      <div className="nav__search">
        <span className="nav__search-box">
          <InputBox placeholder={"Search"} iconSrc={searchIcon} />
        </span>
        <Avatar userName={userName} avatarSrc={avatarImg} />
      </div>

      <Button text={"upload"} iconSrc={uploadIcon} handleClick={() => navigate("../upload")} />
      <Avatar userName={userName} avatarSrc={avatarImg} />
    </div>
  );
};

export default NavBar;
