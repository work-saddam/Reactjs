// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World!";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world! from react"
);
console.log(heading)     //In js-dom, it will gives the html element.
                            //  But in react, it will gives an OBJECT. ✅
                            // React element is always an javascript object.

const root = ReactDOM.createRoot(document.getElementById("root")); //It's the job of ReactDOM to create root.
// console.log(root)

root.render(heading);