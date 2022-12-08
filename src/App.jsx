import BsNavbar from './components/BsNavbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <div className="divContainer">

      <BrowserRouter>
        <BsNavbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}
export default App
