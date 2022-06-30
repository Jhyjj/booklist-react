
import './App.css';
import Mainpage from './components/Mainpage';
import {ListProvider} from './context/TestContext';

function App() {
  return (
    <ListProvider>
    <div className="App">
      <Mainpage></Mainpage>
    </div>
    </ListProvider>
  );
}

export default App;
