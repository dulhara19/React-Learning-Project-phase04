# 🌀 useEffect Hook in React

The `useEffect` Hook is used to handle **side effects** in functional components. Side effects can include data fetching, subscriptions, manually changing the DOM, or setting up timers.

## 📌 Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  console.log("This runs after the component renders!");
});
```

## 🔄 useEffect with Dependencies

Run the effect only when specific dependencies change.

```jsx
import { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs when count changes

  return <button onClick={() => setCount(count + 1)}>Increase</button>;
};
```

## ❌ Cleanup Function

Used to **clean up** when a component unmounts.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer); // Cleanup when unmounted
}, []);
```

## ✅ When to Use `useEffect`?

✔ Fetching API data  
✔ Listening to user events  
✔ Managing subscriptions (e.g., WebSockets)  
✔ Handling timers and intervals

# Component Lifecycle in React

The **Component Lifecycle** in React refers to the different stages a React component goes through from when it is created, updated, and finally removed from the UI.

## React components go through three main phases:

1️⃣ **Mounting** (Component is created and added to the DOM)  
2️⃣ **Updating** (Component re-renders due to changes in props or state)  
3️⃣ **Unmounting** (Component is removed from the DOM)

---

## 1️⃣ Mounting Phase (When the component is first created)

This happens when a component is added to the UI for the first time.

🔹 **Lifecycle methods/hooks used:**

- `constructor()` _(only in class components)_ → Initializes the state
- `render()` → Returns JSX to be displayed
- `componentDidMount()` _(class component)_ → Runs after first render
- `useEffect(() => {}, [])` _(functional component equivalent of componentDidMount)_

---

## 2️⃣ Updating Phase (When props or state change)

This happens when a component re-renders due to:

- Changes in state _(from useState)_
- Changes in props from a parent component

🔹 **Lifecycle methods/hooks used:**

- `shouldComponentUpdate()` → _(class component, controls re-rendering)_
- `componentDidUpdate()` → Runs after every update
- `useEffect(() => {}, [dependency])` _(functional component equivalent of componentDidUpdate)_

---

## 3️⃣ Unmounting Phase (When a component is removed)

This happens when a component is removed from the UI.

🔹 **Lifecycle methods/hooks used:**

- `componentWillUnmount()` _(class component)_
- `useEffect(() => { return () => { cleanup } }, [])` _(functional component equivalent)_

---

### Summary

- Class components use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Functional components use the `useEffect` hook to handle lifecycle behaviors.

## 📌 Key Functions of useContext

1️⃣ Access Global State

    useContext allows components to read values from a Context.Provider without needing props.

2️⃣ Avoid Prop Drilling

    Instead of passing props through multiple levels, components can directly access shared values.

3️⃣ Simplify State Management

    Works like a lightweight global state for sharing data between components.

4️⃣ Dynamic Context Updates

    When the Provider's value changes, all components using useContext automatically re-render.

5️⃣ Works with Custom Hooks

    useContext can be combined with custom hooks to better organize and manage context data.

```jsx
import React, { createContext, useContext } from "react";
```

```
// 1️⃣ Create a Context
const ThemeContext = createContext();

// 2️⃣ Create a component that consumes the context
const DisplayTheme = () => {
const theme = useContext(ThemeContext); // Access value from context
return <p>Current Theme: {theme}</p>;
};

// 3️⃣ Provide the context value to the component tree
const App = () => {
return (
<ThemeContext.Provider value="🌙 Dark Mode">
<DisplayTheme />
</ThemeContext.Provider>
);
};

export default App;
```

### 🎯 When to Use useContext?

✅ Theming (Light/Dark mode)
✅ User Authentication (Logged-in user details)
✅ Language Preferences (Multilingual apps)
✅ Global Configurations (API endpoints, app settings)

### 🚀 Why Use useContext Instead of Props?

🔹 Without useContext, you'd have to pass values manually through props at every level.
🔹 With useContext, components can access global state directly, making the code cleaner and easier to maintain.

# useRef in React

`useRef` is a React Hook that allows you to persist values across renders **without causing re-renders**. It is commonly used to reference DOM elements or store mutable values.

## 🔹 When to Use `useRef`?

✅ **Accessing and Manipulating DOM Elements** (e.g., focusing an input field)
✅ **Storing Previous Values Without Re-rendering**
✅ **Maintaining State Without Triggering Re-renders**
✅ **Handling Timeouts and Intervals**

## 🔹 Key Points

- `useRef` **does not trigger re-renders** when updated.
- `.current` holds the reference to the value.
- It can store **DOM elements, timers, and mutable values**.

## 🛑 Common Mistakes

❌ Trying to use `.focus()` on non-focusable elements (like `<div>`)
❌ Expecting `useRef` to trigger re-renders (use `useState` for that)
❌ Forgetting to initialize `useRef(null)` when working with DOM elements

# useReducer Hook in React

## Overview

The `useReducer` hook in React is used for managing complex state logic in a component. It is an alternative to `useState`, particularly when the next state depends on the previous state.

## Why use useReducer?

- Helps manage complex state transitions.
- Keeps logic separate from UI components.
- Provides better scalability compared to `useState`.

## How it Works

`useReducer` takes two arguments:

1. **A reducer function** – Defines how the state should update based on an action.
2. **An initial state** – The starting value of the state.

It returns an array with two elements:

- **state** – The current state.
- **dispatch** – A function to send actions to the reducer.

## Example Implementation

```jsx
import { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>plus</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus</button>
    </div>
  );
};

export default Counter;
```

Breakdown of the Code

    Reducer function: Defines how state changes based on the action.type.
    useReducer Hook: Initializes the state and provides a dispatch function.
    dispatch function: Used to send actions (INCREMENT or DECREMENT) to update state.

When to Use useReducer?

    When state logic is complex or involves multiple sub-values.
    When the next state depends on the previous state.
    When managing state transitions in a predictable way.
