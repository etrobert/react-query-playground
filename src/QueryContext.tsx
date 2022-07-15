import { createContext, ReactNode } from 'react';
import useCount from './useCount';

type QueryContextValue = {
  query: string;
  updateQuery: () => void;
};

const initialValue = {
  query: 'initialData',
  updateQuery: () => {},
};

const QueryContext = createContext<QueryContextValue>(initialValue);

const QueryContextProvider = ({ children }: { children: ReactNode }) => {
  const { count, increaseCount } = useCount();

  const query = `data${count}`;
  const updateQuery = increaseCount;

  return (
    <QueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContext;
export { QueryContextProvider };
