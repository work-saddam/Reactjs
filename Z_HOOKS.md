## React
ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs).It is developed and maintained by Facebook. It uses the concept of virtual DOM for faster updates.

## React Component
In React, a component is an independent, reusable building block that defines a piece of the user interface (UI). Component allowing developers to break down complex UIs into smaller, manageable, and self-contained units making code easier to understand, test, and maintain. 

React components follow the DRY principle (Don’t Repeat Yourself), which means you can reuse logic and UI elements without having to rewrite the same code repeatedly.

## Library vs Framework
1. A library gives us the freedom to structure our app as we like, while a framework provides a predefined structure for building the app.

2. In a library, the control flow is in our hands — we decide when and how to call the library functions.
In a framework, the control flow is managed by the framework — it calls our code when needed.

# React Hooks
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. With the help of hooks we can manage the state, handle side effects (like API calls), and perform many other tasks.

There are multiple hooks provided by react such as:
- useState: Lets you create statefull variable in a functional component.
- useEffect: Lets you perform side effects (like fetching data or subscribing to events).
- useContext: Lets you consume values from a React context.
- useRef: Lets you create a mutable reference that doesn’t cause re-renders.
- useMemo: Memoizes a computed value to avoid expensive recalculations.
- useCallback: Memoizes a callback function so it doesn't get recreated on every render.
- useReducer: An alternative to useState for complex state logic.
- useLayoutEffect: Similar to useEffect, but runs synchronously after all DOM mutations.

## Custom Hooks
Custom Hooks in React are JavaScript functions that allow for the extraction the reusable logic from functional components. These hook can share logic between components without repeating code.
It is best practice to start the hook name with the word "use". It is not mandatory.

## useState()
useState hooks is used to create a statefull variable in a functional component. It take initial state as an argument and returns an array of two entries. 1st was current state value and 2nd a function to update that value.

Whenever the state variable is update, react re-render that components.

```
const [count, setCount] = useState(0);
``` 

## useEffect()
The useEffect Hook allows you to manage side effects in our components. Some examples of side effects are: fetching API data, directly updating the DOM, and setting up subscriptions or timers. It take two arguments, a callback function and a dependency array.

```
useEffect(() => {}, [])
```

1. If no dependency array ==> useEffect() is called on every render.

2. If dependency array was empty ==> useEffect() is called only on initial render(just once) 

3. If dependency array have some element ==> useEffect() is called on initial render and also every time when that element update/change.

When you return a function from useEffect, that function runs when the component unmounts (and also just before the effect re-runs if the dependencies change). Returning a function from useEffect is how you define a cleanup function. This is particularly useful for cleaning up subscriptions, timers, or event listeners when the component unmounts or before the effect runs again.

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

## useContext
React Context is a feature in React that allows you to share data globally across your component tree without manually passing props through every level. Use Context when you have global data that many components need access to, such as themes, authentication, language preferences.

### 🔧 How it works:
#### 1. Create a Context
```
const ThemeContext = React.createContext();
```
#### 2. Provide the Context
Wrap your component tree with the provider and pass a value.

```
<ThemeContext.Provider value={"dark"}>
  <App />
</ThemeContext.Provider>
```
#### 3. Consume the Context
Use the useContext hook in any child component:

```
const theme = useContext(ThemeContext);
```

## useRef()
The useRef hook in React is a built-in hook that provides a way to create a mutable reference that persists across component renders, without causing re-renders when its value changes. It returns a plain JavaScript object with a single property, current, which can hold any mutable value.

```
const input = useRef(null);
```

### Difference between state and ref
A ref is similar to state, in that, we can hold and mutate values to be used in a component. However, unlike state, mutation of a ref does not trigger a re-render. This makes useRef suitable for storing mutable values that need to persist across renders without causing the component to re-render.


## useMemo()
The useMemo hook is a built-in hook used for memoization.

Think of memoization as caching a value so that it does not need to be recalculated.

It is an optimization technique to improve the performance of functional components. It allows us to cache the result of an expensive calculation so that it is not re-computed on every re-render of the component, unless its dependencies change.

```
const value = useMemo(() => expensiveCalculation(), []);
```

useMemo accepts two arguments:
- A callback function that performs the expensive computation and returns the value we want to memoize.
- A dependency array (similar to useEffect).

#### ⚠️ Best Practices
- Don’t overuse useMemo — memoization is a heavy task.
- Use only when necessary (e.g., noticeable slowdowns or object reference stability).
- Always provide a dependency array; omitting it means recomputing on every render.

## useCallback()
useCallback is a React Hook that memoizes a function definition, preventing its re-creation on every render of a component unless its dependencies change. This is primarily used for performance optimization.

Preventing unnecessary re-renders of child components:

When a parent component re-renders, any functions defined within it are re-created, leading to new function references. If these functions are passed as props to child components, the child components might re-render unnecessarily because they detect a new prop (the function reference) even if the function's logic hasn't conceptually changed. useCallback ensures the same function instance is returned across renders as long as its dependencies remain the same.

```
const memoizedCallback = useCallback(() => {
    // Function logic
}, [dependencies]);
```

useCallback accepts two arguments:
- callback: The function you want to memoize.
- A dependency array (similar to useEffect).

## useMemo() vs useCallback()
The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

| Feature           | `useMemo`                                    | `useCallback`                                      |
| ----------------- | -------------------------------------------- | -------------------------------------------------- |
| **Purpose**       | Memoize a **value**                          | Memoize a **function**                             |
| **Returns**       | The **result** of a function                 | The **function itself**                            |
| **Use Case**      | Avoid recalculating expensive values         | Prevent re-creating functions between renders      |
| **Typical Usage** | Calculated values (filtering, sorting, etc.) | Function props passed to memoized child components |
| **Common Pair**   | `useMemo(() => expensiveFn(), [deps])`       | `useCallback(() => handlerFn(), [deps])`           |


## React19 Features
More Info: [https://www.youtube.com/watch?v=hiiGUjEkzbM&list=PLIJrr73KDmRw-T8bdJn3XxVMbH-zlooKb](https://www.youtube.com/watch?v=hiiGUjEkzbM&list=PLIJrr73KDmRw-T8bdJn3XxVMbH-zlooKb)

#### React Compiler
It automatically optimizes React code eliminating the need for manual memoization hooks like useMemo and useCallback. Transforms React code into efficient JavaScript under the hood.

#### Server Components
 React 19 introduces Server Components, allowing components to be rendered on the server before being sent to the client. This can significantly improve initial page load times and enhance Search Engine Optimization (SEO). 