import { useQuery } from 'react-query';

import './App.css';

const fetchData = () =>
  new Promise<string>((resolve) => {
    console.log('Fetching Data');
    resolve('myData');
  });

function App() {
  const { data } = useQuery('data', fetchData);
  return (
    <div className="App">
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;
