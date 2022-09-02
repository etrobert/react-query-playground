import { useCallback, useContext } from 'react';
import { useQueryClient } from 'react-query';
import QueryContext from './QueryContext';

const useInvalidateQuery = () => {
  const { query } = useContext(QueryContext);
  const queryClient = useQueryClient();
  return useCallback(
    () => queryClient.invalidateQueries(['data', query]),
    [query, queryClient]
  );
};
export default useInvalidateQuery;
