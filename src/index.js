import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));

//simple css files, elements for you to use. It will give us a little bit of default styling

//faker.js -> an open source library that can help you automatically generate a ton of data to use inside of your own personal projects. it is going to be completely fake data but it will help to make some initial development of a project when you actually might not have some actual data to work with
