import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Elements/Button";
import Field from "../../components/Elements/Field";
import { updateUserInfo } from "../../redux/features/userInfoSlice";
import { colors } from "../../utils/constants/colors";
import "./SignUp.scss";

const SignUp = () => {
  const [value, setValue] = useState<string>("");

  const username = useSelector((state: any) => state.user.username);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      navigate("/");
    }
  }, [username]);

  const updateVal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const saveUsername = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    dispatch(updateUserInfo({ username: value }));
    navigate("/");
  };

  return (
    <div className="SignUp">
      <div className="SignUp-Card">
        <h2 className="SignUp-Heading">Welcome to CodeLeap network!</h2>
        <form className="SignUp-Form">
          <Field
            placeholder="John doe"
            type="input"
            value={value}
            setValue={updateVal}
            label="Please enter your username"
          />
          <Button
            onClick={saveUsername}
            type={value ? colors.primary : colors.inactive}
            disabled={!value}
            text="enter"
            textTransform="uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
