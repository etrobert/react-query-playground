import { createContext, ReactNode } from 'react';
import useCount from './useCount';

const FetchCountContext = createContext({
  fetchCount: 0,
  increaseFetchCount: () => {},
});

const FetchCountContextProvider = ({ children }: { children: ReactNode }) => {
  const { count: fetchCount, increaseCount: increaseFetchCount } = useCount();
  return (
    <FetchCountContext.Provider value={{ fetchCount, increaseFetchCount }}>
      {children}
    </FetchCountContext.Provider>
  );
};

export default FetchCountContext;
export { FetchCountContextProvider };
