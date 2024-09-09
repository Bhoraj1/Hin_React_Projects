import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListData } from "../store/Posts-list";

export default function Post({ post }) {
  const { deletePost } = useContext(PostListData);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <div key={tag}>
              <span className="badge text-bg-primary hashtag">{tag}</span>
            </div>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This post has been Reacted by {post.reactions.likes} peoples.
          </div>
        </div>
      </div>
    </>
  );
}
