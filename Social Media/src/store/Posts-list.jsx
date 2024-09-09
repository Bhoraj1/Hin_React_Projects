import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "DELETE_POST") {
    newPostList = currentPostList.filter( 
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_MULTIPLE_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
    console.log("all data are", post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_MULTIPLE_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );


  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
}
