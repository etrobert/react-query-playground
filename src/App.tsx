import { useQuery } from 'react-query';

import './App.css';

const wait = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const fetchData = () =>
  new Promise<string>(async (resolve) => {
    console.log('Fetching Data');
    await wait(1000);
    resolve('myData');
  });

function App() {
  const { data, isLoading } = useQuery('data', fetchData);
  return (
    <div className="App">
      <header className="App-header">{isLoading ? 'Loading...' : data}</header>
    </div>
  );
}

export default App;
