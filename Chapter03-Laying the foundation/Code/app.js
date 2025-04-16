import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement- JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React using core react 🚀"
);
console.log(heading); //it was react element (Object)

//JSX - HMTL like syntax. (it's not a html)
//JSX is not the pure javaScript. Browser/Js engine did't understand jsx. It will throw error.
//Behind the scene, Parcel (BABEL) TRANSPILED JSX before reaches the js engine.
//Parcel is like manager, (BABEL) is responsile to convert JSX into react.

// JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)

const jsxHeading = <h1 className="heading">React using JSX 🚀</h1>;
// if jsx code have more than 1 line, we must have to wrap in parentheses().

console.log(jsxHeading); //it also a react element (Object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
