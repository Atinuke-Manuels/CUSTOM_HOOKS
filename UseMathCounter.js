import { useState } from 'react';

function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);

  const increment = (amount = 1) => {
    setValue(value + amount);
  };

  const decrement = (amount = 1) => {
    setValue(value - amount);
  };

  const multiply = (amount = 1) => {
    setValue(value * amount);
  };

  const divide = (amount = 1) => {
    setValue(value / amount);
  };

  const reset = (initialValue) => {
    setValue(initialValue);
  };

  return { value, increment , decrement, multiply, divide, reset};
}

export default useCounter;
