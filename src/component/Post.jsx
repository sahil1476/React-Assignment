import React from "react";
import "../component/Post.css";
function Post({ heading, description, author, timePublished, likes }) {
  return (
    <div>
      <div className="post">
        <div className="post-header">
          <h2>{heading}</h2>
          <span className="like-sign" role="img" aria-label="Like">
            &#128077; {likes}
          </span>
        </div>
        <p className="post-description">{description}</p>
        <div className="post-footer">
          <p className="author">{author}</p>
          <p className="time-published">{timePublished}</p>
        </div>
      </div>
    </div>
  );
}
export default Post;
