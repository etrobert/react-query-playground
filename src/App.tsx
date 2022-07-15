import range from 'lodash/range';
import Item from './Item';
import useCount from './useCount';
import './App.css';

function App() {
  const { count, increaseCount } = useCount();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increaseCount}>Add Item</button>
        {range(count).map((i) => (
          <Item key={i} />
        ))}
      </header>
    </div>
  );
}

export default App;
