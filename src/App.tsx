import range from 'lodash/range';
import Item from './Item';
import useCount from './useCount';
import { QueryStringContextProvider } from './QueryStringContext';
import './App.css';

function App() {
  const { count, increaseCount } = useCount();
  return (
    <QueryStringContextProvider>
      <div className="App">
        <header className="App-header">
          <button onClick={increaseCount}>Add Item</button>
          {range(count).map((i) => (
            <Item key={i} />
          ))}
        </header>
      </div>
    </QueryStringContextProvider>
  );
}

export default App;
