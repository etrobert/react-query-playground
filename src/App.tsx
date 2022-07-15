import range from 'lodash/range';
import Item from './Item';
import useCount from './useCount';
import QueryStringContext from './QueryStringContext';
import './App.css';
import { useContext } from 'react';

function App() {
  const { count, increaseCount } = useCount();
  const { updateQueryString } = useContext(QueryStringContext);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increaseCount}>Add Item</button>
        <button onClick={updateQueryString}>Update Query String</button>
        {range(count).map((i) => (
          <Item key={i} />
        ))}
      </header>
    </div>
  );
}

export default App;
