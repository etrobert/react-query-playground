import { createContext, ReactNode, useState } from 'react';

type QueryStringContextValue = {
  queryString: string;
  setQueryString: (queryString: string) => void;
};

const initialValue = {
  queryString: 'initialData',
  setQueryString: () => {},
};

const QueryStringContext = createContext<QueryStringContextValue>(initialValue);

const QueryStringContextProvider = ({ children }: { children: ReactNode }) => {
  const [queryString, setQueryString] = useState('initialData2');

  return (
    <QueryStringContext.Provider value={{ queryString, setQueryString }}>
      {children}
    </QueryStringContext.Provider>
  );
};

export default QueryStringContext;
export { QueryStringContextProvider };
