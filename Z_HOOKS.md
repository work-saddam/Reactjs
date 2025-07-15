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
