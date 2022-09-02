import range from 'lodash/range';
import Item from './Item';
import useCount from './useCount';
import QueryContext from './QueryContext';
import './App.css';
import { useContext } from 'react';
import useDataQuery from './useDataQuery';
import useInvalidateQuery from './useInvalidateQuery';

function App() {
  const { count, increaseCount } = useCount();
  const { updateQuery, refreshQueryObject } = useContext(QueryContext);
  const invalidateQuery = useInvalidateQuery();
  const { isFetching, isLoading } = useDataQuery();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increaseCount}>Add Item</button>
        <button onClick={updateQuery}>Update Query</button>
        <button onClick={refreshQueryObject}>Refresh Query Object</button>
        <button onClick={invalidateQuery}>Invalidate Query</button>
        {range(count).map((i) => (
          <Item key={i} />
        ))}
        {`isFetching: ${isFetching} isLoading: ${isLoading}`}
      </header>
    </div>
  );
}

export default App;
