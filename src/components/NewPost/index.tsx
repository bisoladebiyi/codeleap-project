import React, { FunctionComponent, useEffect } from "react";
import { colors } from "../../utils/constants/colors";
import { INewAndEditPost } from "../../utils/interfaces/interfaces";
import Button from "../Elements/Button";
import Field from "../Elements/Field";
import "./NewPost.scss";

const NewPost: FunctionComponent<INewAndEditPost> = ({
  title,
  content,
  setValue,
  type,
  isCreating,
  createPost,
  editPost,
  closeModal,
  setEditedContent,
  editedContent,
  isEditing,
}) => {
  const updateEditedVal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field?: string
  ) => {
    e.preventDefault();
    if (field && editedContent) {
      setEditedContent &&
        setEditedContent({ ...editedContent, [field]: e.target.value });
    }
  };

  const isContentValid = title.trim() && content.trim();
  const isEditType = type === "edit" && editedContent;

  return (
    <div className={`NewPost ${type === "edit" ? "NewPost-EditType" : ""}`}>
      <h2 className="NewPost-Heading">
        {type === "edit" ? "Edit item" : "What’s on your mind?"}
      </h2>
      <form action="" className="NewPost-Form">
        <Field
          type="input"
          value={isEditType ? editedContent.title : title}
          label="Title"
          placeholder="Hello world"
          setValue={type === "edit" ? updateEditedVal : setValue}
          onChangeParam="title"
        />
        <Field
          type="textarea"
          value={isEditType ? editedContent.content : content}
          label="Content"
          placeholder="Content here"
          setValue={type === "edit" ? updateEditedVal : setValue}
          onChangeParam="content"
        />
        {type === "edit" ? (
          <div className="NewPost-EditTypeBtns">
            <Button text="Cancel" type={colors.basic} onClick={closeModal} />
            <Button
              text="Save"
              type={colors.green}
              loading={isEditing}
              onClick={editPost}
            />
          </div>
        ) : (
          <Button
            disabled={isContentValid ? false : true}
            text="Create"
            type={isContentValid ? colors.primary : colors.inactive}
            loading={isCreating}
            onClick={createPost}
          />
        )}
      </form>
    </div>
  );
};

export default NewPost;
