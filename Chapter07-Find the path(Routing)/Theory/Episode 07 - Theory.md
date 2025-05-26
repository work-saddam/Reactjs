# Episode 07 - Finding the Path

## Q: What are various ways to `add images` into our App? Explain with `code examples`.

A: Using the `full URL of the image` for the web (CDN) or any public images.
Example :

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

Adding the image into the project
`Drag your image into your project` and `import it` into the desired component

```
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders.

```
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

## Q: What would happen if we do `console.log(useState())`?

A: If we do `console.log(useState())`, we get an array `[undefined, function]` where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```

## In short:-
  -If no dependency array ==> useEffect() is called on every render.
  -If dependency array was empty ==> useEffect() is called only on initial render(just once)
  -If dependency array have some element ==> useEffect() is called on initial render and also every time when that element update/change.

  What when we return a funtion from useEffect()
  When you return a function from useEffect, that function runs when the component unmounts (and also just before the effect re-runs if the dependencies change).
  Returning a function from useEffect is how you define a cleanup function. This is particularly useful for cleaning up subscriptions, timers, or event listeners when the component unmounts or before the effect runs again.

```
useEffect(() => {
  // This runs when the component mounts or dependencies change

  return () => {
    // This runs when:
    // 1. The component unmounts
    // 2. Or just before running the effect again due to dependency change
  };
}, [/* dependencies */]);
```

## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.

## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?

A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`.
