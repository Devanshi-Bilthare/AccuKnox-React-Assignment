import Home from './Pages/Home';
import jsonData from './Data.json'

function App() {
  return (
   <Home data={jsonData.data}/>
  );
}

export default App;
