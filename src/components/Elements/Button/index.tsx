import React, { FunctionComponent } from "react";
import { colors } from "../../../utils/constants/colors";
import { IButton } from "../../../utils/interfaces/interfaces";
import PulseLoader from "react-spinners/PulseLoader";
import "./Button.scss";

const Button: FunctionComponent<IButton> = ({
  text,
  type,
  textTransform,
  loading,
  ...props
}) => {
  return (
    <button
      className="Button"
      style={{
        background: type || colors.primary,
        textTransform: textTransform || "capitalize",
        color: type === colors.basic ? colors.black : colors.basic,
        border: type === colors.basic ? `1px solid ${colors.grey}` : "none",
      }}
      {...props}
    >
      {loading ? <PulseLoader size={10} color={colors.basic} /> : text}
    </button>
  );
};

export default Button;
