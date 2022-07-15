import useDataQuery from './useDataQuery';

const Item = () => {
  const { isLoading, data } = useDataQuery();
  return <div>{isLoading ? 'Loading...' : data}</div>;
};

export default Item;
