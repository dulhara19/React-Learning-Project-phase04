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

Let me know if you need more details! 🚀
