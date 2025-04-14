// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "hello world! from react"
// );
// console.log(heading)     //In js-dom, it will gives the html element.
                            //  But in react, it will gives an OBJECT. ✅
                            // React element is always an javascript object.

const parent = React.createElement(    // It's the job of Core React to create an element.
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ])
);
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root")); //It's the job of ReactDOM to create root.
// console.log(root)

// root.render(heading);
root.render(parent);