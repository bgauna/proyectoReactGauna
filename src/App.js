import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='category/:category' element={<ItemListContainer />}></Route>
        <Route path='item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
    
    
    
    
    
  );
}

export default App;
