import { useCallback, useState } from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(
    () => setCount((previousCount) => previousCount + 1),
    []
  );
  return { count, increaseCount };
};

export default useCount;
