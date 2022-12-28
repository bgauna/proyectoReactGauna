import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tarjeta from './components/Tarjeta';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
              <NavBar />
      <header className="App-header">

        <ItemListContainer mensaje="Hola Mr. Fulano" />
        <Tarjeta item={{titulo:'Tableros de Control', imagen:'../img/tableros.png',texto:'Curso de tableros de control',}} />
      </header>
      
    </div>
  );
}

export default App;
