import React, { FunctionComponent } from "react";
import { IPost } from "../../utils/interfaces/interfaces";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import "./Post.scss";
import { modalTypes } from "../../utils/constants/modalTypes";
import { humanize } from "../../utils/helpers/dateFormatter";

const Post: FunctionComponent<IPost> = ({
  id,
  title,
  content,
  created_datetime,
  username,
  openModal,
}) => {
  return (
    <div className="Post">
      <div className="Post-Header">
        <h2>{title}</h2>
        <div className="Post-HeaderBtns">
          <button onClick={() => openModal(modalTypes.del, id)}>
            <img src={deleteIcon} />
          </button>
          <button
            onClick={() => openModal(modalTypes.edit, id, title, content)}
          >
            <img src={editIcon} />
          </button>
        </div>
      </div>
      <div className="Post-Body">
        <div className="Post-NameAndTime">
          <p>@{username}</p>
          <p>{humanize(created_datetime)}</p>
        </div>
        <p className="Post-Content">{content}</p>
      </div>
    </div>
  );
};

export default Post;
