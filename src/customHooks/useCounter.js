import { useState } from 'react';

const useCounter = (initialValue: number) => {
  const [value, setValue] = useState(initialValue);
  if(value<1){
    setValue(1);
  }
  const increment = () => setValue(c => c + 1);
  const decrement = () => setValue(c => c - 1);
  return { value, increment, decrement};
};

export default useCounter;
