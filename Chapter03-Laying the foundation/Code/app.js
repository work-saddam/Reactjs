import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement- JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "React using core react 🚀"
);
// console.log(heading);      //it was react element (Object)

//JSX - HMTL like syntax. (it's not a html)
//JSX is not the pure javaScript. Browser/Js engine did't understand jsx. It will throw error.
//Behind the scene, Parcel (BABEL) TRANSPILED JSX before reaches the js engine.
//Parcel is like manager, (BABEL) is responsile to convert JSX into react.

// JSX => React.createElement => ReactElement- JS Object => HTMLElement(render)

//React Element
const jsxHeading = <h1 className="heading">React using JSX 🚀</h1>;
// if jsx code have more than 1 line, we must have to wrap in parentheses().
// console.log(jsxHeading);     //it also a react element (Object)

// In React, everything is COMPONENT.
/* React Component:-
    1) Class Based Component - OLD Way
    2) Functional Component - NEW Way
 */

//React Functional Component:- A function that return the piece of jsx code or react element
  //Function name should be start with Capital Letter
  const Title = () => (
    <h1 className="title"> 
      Title
    </h1>
  );
  
    //Component composition - combining two or more component
  const HeadingComponent = () => {
    return (
      <div className="container">
        <Title />
        <h1 className="heading">React using Functional Component</h1>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
