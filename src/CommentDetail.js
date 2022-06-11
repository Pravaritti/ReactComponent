import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetail = (props) => {
  console.log(props); //props is an object
  return (
    <div className="comment">
      <a href="/" className="avatar">
        {/*<img alt="avatar" src={faker.image.avatar()} /> 
          right now this image is being randomly generated.

          lets try to get it from parent
        */}
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
