// useRef():-> useRef creates a mutable container that persists across renders without causing re-renders.
// const ref = useRef(initialValue); -> it return ref.current

// Why do we use this instead of state?

// React normally avoids direct DOM manipulation.

// But useRef is used when you need:

// Focus input fields
// Scroll to elements
// Play/pause videos
// Measure DOM size

// These are things state cannot do

import { useRef } from "react";

// Core Properties (Very Important)
//  Value persists across renders
//  Updating it does NOT trigger re-render
//  Can store DOM elements OR any value

// Think of useRef Like This

// useState = causes UI update
// useRef = stores value silently (no re-render)

// Use Case 1: Access DOM Elements

const InputFocus = () => {
  // useRef
  const inputRef = useRef();
  // function
  const handleFocus = () => {
    if (inputRef.current) { // if inputRef.current === null that why we are check first if it is true
      inputRef.current.focus();
    }
  };

  // return
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Typing Somethings...!!!"
        />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    </div>
  );
};
export default InputFocus;

// Why useRef here?

// React doesn’t directly manipulate DOM
// useRef gives controlled access
