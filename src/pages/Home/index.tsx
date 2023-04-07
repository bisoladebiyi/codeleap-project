import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteModalContent from "../../components/DeleteModalContent";
import Modal from "../../components/Elements/Modal";
import Navbar from "../../components/Navbar";
import NewPost from "../../components/NewPost";
import Post from "../../components/Post";
import { modalTypes } from "../../utils/constants/modalTypes";
import { IPost, IPostBody } from "../../utils/interfaces/interfaces";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
} from "../../actions/requests";
import "./Home.scss";
import PaginationWidget from "../../components/Elements/PaginationWidget";
import useClickOut from "../../hooks/useClickout";

const Home = () => {
  const [paginationCount, setPaginationCount] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [editedContent, setEditedContent] = useState<IPostBody>({
    title: "",
    content: "",
  });
  const [selectedId, setSelectedId] = useState<number>(0); // id of item to edit or delete

  //   loading states
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const username = useSelector((state: any) => state.user.username);
  const navigate = useNavigate();

  const domRef = useClickOut(() => {
    resetModalData();
  });

  useEffect(() => {
    if (!username) {
      navigate("/sign-up");
    }

    getUsersPosts();
  }, [username]);

  const createUserPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      await createPost({ title, content, username });
      getUsersPosts();
    } catch (error) {
      console.log(error);
    } finally {
      setIsCreating(false);
      setTitle("");
      setContent("");
    }
  };

  const getUsersPosts = async (newUrl?: string | null) => {
    try {
      const data = await getPosts(newUrl);
      setPosts(data.results);
      setPrevPage(data.previous);
      setNextPage(data.next);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async () => {
    setIsDeleting(true);

    try {
      await deletePost(selectedId);
      getUsersPosts();
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleting(false);
      resetModalData();
    }
  };

  const editItem = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsEditing(true);

    try {
      await editPost(selectedId, editedContent);
      getUsersPosts();
    } catch (error) {
      console.log(error);
    } finally {
      setIsEditing(false);
      resetModalData();
    }
  };

  //   modal functions
  const openModal = (
    type: string,
    id: number,
    title?: string,
    content?: string
  ) => {
    setShowModal(true);
    setModalType(type);
    setSelectedId(id);
    setEditedContent({ title: title || "", content: content || "" });
  };

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    resetModalData();
  };

  const resetModalData = () => {
    setShowModal(false);
    setModalType("");
    setEditedContent({ title: "", content: "" });
  };

  const updateValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field?: string
  ) => {
    if (field === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  //   pagination functions
  const handlePageChange = (type: "next" | "prev") => {
    if (type === "next") {
      getUsersPosts(nextPage);
      setPaginationCount(paginationCount + 1);
    } else {
      getUsersPosts(prevPage);
      setPaginationCount(paginationCount - 1);
    }
  };

  return (
    username && (
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
    )
  );
};

export default Home;
