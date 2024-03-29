import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import Shop from './Pages/LoginSignup'; // for some reason this ones get imported without the {}. I think that is the reason why hero its not being loaded
import  Product from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory category="men"/>}/>
  <Route path='/womens' element={<ShopCategory category="women"/>}/>
  <Route path='/kids' element={<ShopCategory category="kids"/>}/>
  <Route path='/product' element={<Product/>}>
    <Route path=':productId' element={<Product/>}/>
  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
