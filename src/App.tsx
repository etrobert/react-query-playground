import range from 'lodash/range';
import Item from './Item';
import useCount from './useCount';
import QueryContext from './QueryContext';
import './App.css';
import { useContext } from 'react';

function App() {
  const { count, increaseCount } = useCount();
  const { updateQuery, refreshQueryObject } = useContext(QueryContext);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increaseCount}>Add Item</button>
        <button onClick={updateQuery}>Update Query</button>
        <button onClick={refreshQueryObject}>Refresh Query Object</button>
        {range(count).map((i) => (
          <Item key={i} />
        ))}
      </header>
    </div>
  );
}

export default App;
