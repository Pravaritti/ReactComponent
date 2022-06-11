import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at4:45PM "
        content="Nice blog post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Arthur"
        timeAgo="Today at 2:00AM"
        content="I like the subject"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Samantha"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Nagarjun"
        timeAgo="Today at 7:34PM"
        content="Very progressive"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Prabhas"
        timeAgo="Yeaterdat at 3:00AM"
        content="Beautifully Described"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

//simple css files, elements for you to use. It will give us a little bit of default styling

//faker.js -> an open source library that can help you automatically generate a ton of data to use inside of your own personal projects. it is going to be completely fake data but it will help to make some initial development of a project when you actually might not have some actual data to work with
