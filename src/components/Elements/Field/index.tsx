import React, { FunctionComponent } from "react";
import { IField } from "../../../utils/interfaces/interfaces";
import "./Field.scss";

const Field: FunctionComponent<IField> = ({
  type,
  value,
  setValue,
  label,
  placeholder,
  onChangeParam,
}) => {
  return (
    <div className="Field">
      <label className="Field-Label">{label}</label>
      {type === "input" ? (
        <input
          value={value}
          onChange={(e) => setValue(e, onChangeParam)}
          className="Field-Input_TextArea"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => setValue(e, onChangeParam)}
          className="Field-Input_TextArea"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Field;
