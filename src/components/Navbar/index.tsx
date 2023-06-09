import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../../redux/features/userInfoSlice";
import { routes } from "../../utils/constants/routes";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(updateUserInfo({ username: "" }));
    navigate(routes.SIGNUP);
  };
  return (
    <nav className="Navbar">
      <div className="Navbar-Wrapper">
        <h1>CodeLeap Network</h1>
        <button onClick={logOut}>Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
