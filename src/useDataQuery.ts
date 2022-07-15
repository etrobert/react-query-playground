import { useContext } from 'react';
import { useQuery } from 'react-query';
import QueryStringContext from './QueryStringContext';

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const fetchData = (queryString: string) =>
  new Promise<string>(async (resolve) => {
    console.log('Fetching Data');
    await wait(1000);
    resolve(`myData: ${queryString}`);
  });

const useDataQuery = () => {
  const { queryString } = useContext(QueryStringContext);
  return useQuery(['data', queryString], () => fetchData(queryString));
};

export default useDataQuery;
