// Manipulate the HTML DOM using Javscript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World!";
const root = document.getElementById("root");
root.appendChild(heading);