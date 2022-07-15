import { createContext, ReactNode } from 'react';
import useCount from './useCount';

type QueryStringContextValue = {
  queryString: string;
  updateQueryString: () => void;
};

const initialValue = {
  queryString: 'initialData',
  updateQueryString: () => {},
};

const QueryStringContext = createContext<QueryStringContextValue>(initialValue);

const QueryStringContextProvider = ({ children }: { children: ReactNode }) => {
  const { count, increaseCount } = useCount();

  const queryString = `data${count}`;
  const updateQueryString = increaseCount;

  return (
    <QueryStringContext.Provider value={{ queryString, updateQueryString }}>
      {children}
    </QueryStringContext.Provider>
  );
};

export default QueryStringContext;
export { QueryStringContextProvider };
