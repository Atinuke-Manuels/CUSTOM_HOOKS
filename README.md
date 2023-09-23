# CUSTOM_HOOKS

**CUSTOM_HOOKS** contains code for several custom hooks.

**useMathCounter**

**Description**

This is a custom React hook that provides functionality for performing basic arithmetic operations (addition, subtraction, multiplication, division, reset, value) on a numeric value and a function to reset the value to an initial state. It encapsulates these operations, making it easy to manage and manipulate numeric values within React components.

**REACT SAMPLE CODE**
- 
- ![REACT USAGE EXAMPLE](https://github.com/Atinuke-Manuels/CUSTOM_HOOKS/assets/114990557/529bf82c-930a-4801-862c-b29a1acd7c40)

-
**REACT NATIVE SAMPLE CODE**
- 
- ![REACT NATIVE EXAMPLE](https://github.com/Atinuke-Manuels/CUSTOM_HOOKS/assets/114990557/ee14e287-6f9f-48d1-b012-d7878caaa1d6)

**Steps to use this hook include:**
**run:** 
```bash
npm install use-math-counter

- import useMathCounter into your app component where you want to use it
- access the addition, subtraction, division, multiplication and reset functions embedded.
**see sample usage below first for react projects and next for react-native/expo projects**

-  USAGE IN REACT PROJECTS

  
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
      <button onClick={() => customHook.increment(5)}>Add 5</button>
      <button onClick={() => customHook.decrement(5)}>Subtract 5</button>
      <button onClick={() => customHook.multiply(2)}>Multiply by 2</button>
      <button onClick={() => customHook.divide(2)}>Divide by 2</button>
      <button onClick={() => customHook.reset(0)}>Reset</button>
    </div>
  );
}

export default MyComponent;

- USAGE IN REACT NATIVE PROJECTS

```javascript
import useMathCounter from "use-math-counter"; // Import your custom hook

function Counter() {
  const customHook = useMathCounter(0);

 return (
  <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View style={{display: 'flex', flexDirection: 'column', gap: 3}}>
      <Text>Value: {customHook.value}</Text>
      <Button onPress={() => customHook.increment(1)} title = "Increment by 1" color={"green"}/>
      <Button onPress={() => customHook.decrement(1)} title = "Decrement by 1" color={"red"}/>
      <Button onPress={() => customHook.increment(5)} title = "Add 5" color={"green"}/>
      <Button onPress={() => customHook.decrement(5)} title = "Subtract 5" color={"red"}/>
      <Button onPress={() => customHook.multiply(2)} title = "Multiply by 2" color={"purple"}/>
      <Button onPress={() => customHook.divide(2)} title = "Divide by 2" color={"orange"}/>
      <Button onPress={() => customHook.reset(0)} title = "Reset" color={"black"}/>
    </View>
  </SafeAreaView>
);
 }


export default Counter







