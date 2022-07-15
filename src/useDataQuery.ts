import { useCallback, useContext } from 'react';
import { useQuery } from 'react-query';
import FetchCountContext from './FetchCountContext';
import QueryContext, { Query } from './QueryContext';

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const useFetchData = () => {
  const { fetchCount, increaseFetchCount } = useContext(FetchCountContext);
  const fetchData = useCallback(
    (query: Query) =>
      new Promise<string>(async (resolve) => {
        console.log('Fetching Data');
        increaseFetchCount();
        await wait(1000);
        resolve(`query: ${query.name} fetch: ${fetchCount}`);
      }),
    [fetchCount, increaseFetchCount]
  );
  return fetchData;
};

const useDataQuery = () => {
  const { query } = useContext(QueryContext);
  const fetchData = useFetchData();
  return useQuery(['data', query], () => fetchData(query));
};

export default useDataQuery;
