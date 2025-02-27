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

### 🎯 Summary

- Class components use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Functional components use the `useEffect` hook to handle lifecycle behaviors.
