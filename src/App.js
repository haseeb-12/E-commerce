import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer';
import Shop from './Pages/Shop'
import Home from './Pages/Home';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart'
import './App.css';
import Navbar from './Component/Navbar';

import NotFound from './Pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='shop/:id' element ={<SingleProduct/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='*'  element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
