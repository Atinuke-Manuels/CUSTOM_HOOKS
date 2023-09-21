# CUSTOM_HOOKS

**CUSTOM_HOOKS** contains code for several custom hooks.

**use-math-counter**

**Description**

This is a custom React hook that provides functionality for performing basic arithmetic operations (addition, subtraction, multiplication, division, reset, value) on a numeric value and a function to reset the value to an initial state. It encapsulates these operations, making it easy to manage and manipulate numeric values within React components.


- ![counter_hook_screenshot](https://github.com/Atinuke-Manuels/CUSTOM_HOOKS/assets/114990557/d061a83c-4f50-4e9b-ba3b-13d0193a937f.png)
  
**Steps to use this hook include:**
**run:** 
```bash
npm install use-math-counter

- import use-math-counter into your app component where you want to use it
- access the addition, subtraction, division, multiplication and reset functions embedded.
**see sample usage below**



  
```javascript
import React from "react";
import useMathCounter from "use-math-counter"; // Import your custom hook

function MyComponent() {
  const customHook = useMathCounter(0);

  return (
    <div>
      {/* You could also access the counter value */}
      <p>Value: {customHook.value}</p>
      <button onClick={() => customHook.increment()}>Increment by 1</button>
      <button onClick={() => customHook.decrement()}>Decrement by 1</button>
      <button onClick={() => customHook.add(5)}>Add 5</button>
      <button onClick={() => customHook.subtract(5)}>Subtract 5</button>
      <button onClick={() => customHook.multiply(2)}>Multiply by 2</button>
      <button onClick={() => customHook.divide(2)}>Divide by 2</button>
      <button onClick={() => customHook.reset()}>Reset</button>
    </div>
  );
}

export default MyComponent;







