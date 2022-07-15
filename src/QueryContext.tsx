import { createContext, ReactNode, useMemo } from 'react';
import useCount from './useCount';

type Query = {
  name: string;
};

type QueryContextValue = {
  query: Query;
  updateQuery: () => void;
  refreshQueryObject: () => void;
};

const initialValue = {
  query: { name: 'initialData' },
  updateQuery: () => {},
  refreshQueryObject: () => {},
};

const QueryContext = createContext<QueryContextValue>(initialValue);

const QueryContextProvider = ({ children }: { children: ReactNode }) => {
  const { count, increaseCount } = useCount();
  const { count: invalidator, increaseCount: refreshQueryObject } = useCount();

  // The additional dependency is intentional to invalidate the object
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const query = useMemo(() => ({ name: `${count}` }), [count, invalidator]);
  const updateQuery = increaseCount;

  return (
    <QueryContext.Provider value={{ query, updateQuery, refreshQueryObject }}>
      {children}
    </QueryContext.Provider>
  );
};

export default QueryContext;
export { QueryContextProvider };
export type { Query };
