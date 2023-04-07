import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModalContent from "../../components/DeleteModalContent";
import Modal from "../../components/Elements/Modal";
import Navbar from "../../components/Navbar";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { modalTypes } from "../../utils/constants/modalTypes";
import PaginationWidget from "../../components/Elements/PaginationWidget";
import useHome from "./Home.hooks";
import { routes } from "../../utils/constants/routes";
import "./Home.scss";

const Home = () => {
  const {
    username,
    getUsersPosts,
    createUserPost,
    isCreating,
    updateValue,
    title,
    content,
    posts,
    setEditedContent,
    openModal,
    showModal,
    domRef,
    modalType,
    isDeleting,
    deleteItem,
    closeModal,
    isEditing,
    editItem,
    editedContent,
    paginationCount,
    nextPage,
    prevPage,
    handlePageChange,
  } = useHome();

  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate(routes.SIGNUP);
    }

    getUsersPosts();
  }, [username]);

  if (!username) {
    return null;
  }

  return (
    <div className="Home">
      <Navbar />
      <main>
        <NewPost
          createPost={createUserPost}
          isCreating={isCreating}
          setValue={updateValue}
          title={title}
          content={content}
        />
        <div className="PostsList">
          {posts.map(({ title, content, created_datetime, username, id }) => (
            <Post
              title={title}
              content={content}
              username={username}
              created_datetime={created_datetime}
              setEditedContent={setEditedContent}
              openModal={openModal}
              id={id}
              key={id}
            />
          ))}
        </div>
      </main>

      {/* render edit or delete modal  */}
      {showModal && (
        <Modal domRef={domRef}>
          {modalType === modalTypes.del ? (
            <DeleteModalContent
              loading={isDeleting}
              deleteItem={deleteItem}
              closeModal={closeModal}
            />
          ) : (
            <NewPost
              title={title}
              content={content}
              type="edit"
              setValue={updateValue}
              isEditing={isEditing}
              editPost={editItem}
              closeModal={closeModal}
              setEditedContent={setEditedContent}
              editedContent={editedContent}
            />
          )}
        </Modal>
      )}
      
      <PaginationWidget
        pageNo={paginationCount}
        isNextAvailable={!!nextPage}
        isPrevAvailable={!!prevPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
