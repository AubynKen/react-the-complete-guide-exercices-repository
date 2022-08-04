import { useEffect, useState } from 'react';

const useCounter = (forward = true) => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(prevState => prevState + (forward ? 1 : -1));
    }, 1000);
  }, [forward]);

  return counter;
};

export default useCounter;