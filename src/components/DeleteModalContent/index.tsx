import React, { FunctionComponent } from "react";
import { colors } from "../../utils/constants/colors";
import { IDeleteModalContent } from "../../utils/interfaces/interfaces";
import Button from "../Elements/Button";
import "./DeleteModalContent.scss";

const DeleteModalContent: FunctionComponent<IDeleteModalContent> = ({
  loading,
  deleteItem,
  closeModal,
}) => {
  return (
    <div className="DeleteModalContent">
      <p className="DeleteModalContent-Text">
        Are you sure you want to delete this item?
      </p>
      <div className="DeleteModalContent-Btns">
        <Button text="Cancel" type={colors.basic} onClick={closeModal} />
        <Button
          text="Delete"
          type={colors.red}
          loading={loading}
          onClick={deleteItem}
        />
      </div>
    </div>
  );
};

export default DeleteModalContent;
