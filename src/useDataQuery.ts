import { useContext } from 'react';
import { useQuery } from 'react-query';
import QueryContext from './QueryContext';

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const fetchData = (query: string) =>
  new Promise<string>(async (resolve) => {
    console.log('Fetching Data');
    await wait(1000);
    resolve(`myData: ${query}`);
  });

const useDataQuery = () => {
  const { query } = useContext(QueryContext);
  return useQuery(['data', query], () => fetchData(query));
};

export default useDataQuery;
