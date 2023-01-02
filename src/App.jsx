import './App.css';
import CartContextProvider from './components/CartContext';
import BsNavbar from './components/BsNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <div className="divContainer">

      <CartContextProvider>
        <BrowserRouter>
          <BsNavbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </div>
  )
}
export default App
