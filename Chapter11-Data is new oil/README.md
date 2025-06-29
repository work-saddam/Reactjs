# Chapter 11 - Data is new oil

## Coding Assignment:

- Make restaurant-cart as `higher order` componenet to show its offers.
- Make accordion on restaurant page.
- Make a functionality to collapse all the accordion when i expand other.
  we done it by lifting the state up, so we lift our state variable to parent.
  https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
- In this chapter to avoid props drilling we use `react context`.
  https://react.dev/learn/passing-data-deeply-with-context


🔥Live project till now. [🚀Food-Chapter11](https://food-chapter11.netlify.app/)


## Theory

#### Higher order component

Higher order componet is a function that takes a componenet and return new componenet with enhanced version.
Enhancing mean we add some functionality, style or somithing on top of it.


#### Props Drilling

Props drilling is the process of passing data from a parent component to deeply nested child components through intermediate components that do not need the data themselves, but only serve to forward it. This can make the code harder to maintain and understand.

Alternatives to Props Drilling:-

1. React Context API/Hook
2. State management libraries like:
   - Redux
   - Zustand
   - Recoil
   - Jotai
3. Custom hooks – Encapsulate shared logic and access it where needed.

*In this chapter to avoid props drilling we use `react context`.*
https://react.dev/learn/passing-data-deeply-with-context


#### React Context

React Context is a feature in React that allows you to share data across your component tree without having to pass props down manually at every level.

🧠 When to Use React Context
Use Context when you have global data that many components need access to, such as:
  - Theme (dark/light mode)
  - Authenticated user
  - Language settings (i18n)
  - App settings or config