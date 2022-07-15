import { useQuery } from 'react-query';

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const fetchData = () =>
  new Promise<string>(async (resolve) => {
    console.log('Fetching Data');
    await wait(1000);
    resolve('myData');
  });

const useDataQuery = () => useQuery('data', fetchData);

export default useDataQuery;
