/** Answers for your submission

1) What is JSX, and why is it used?
   JSX is a JavaScript syntax extension that lets you write XML/HTML-like markup directly in JS files. React uses JSX because it makes UI structure easy to visualize and it compiles to efficient React.createElement calls.

2) Difference between State and Props?
   Props are read‑only inputs passed from a parent to a child component. State is local, mutable data managed inside a component (or via hooks) that can change over time and trigger re-renders.

3) What is the useState hook, and how does it work?
   useState provides a state value and a setter function. When you call the setter with a new value, React schedules a re-render and the component reads the updated state on the next render.

4) How can you share state between components in React?
   Lift the state up to a common parent and pass down values/handlers via props; or use context, a state management library (Redux/Zustand), or URL/query/store as a single source of truth.

5) How is event handling done in React?
   Use camelCased props like onClick/onChange on elements and pass a function. React normalizes events through its synthetic event system for cross‑browser behavior.
*/
