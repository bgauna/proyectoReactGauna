import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
              <NavBar />
      <header className="App-header">

        <ItemListContainer mensaje="Hola Mr. Fulano" />
      </header>
      
    </div>
  );
}

export default App;
