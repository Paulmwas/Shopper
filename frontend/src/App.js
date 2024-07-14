
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from '../src/Pages/Shop';
import ShopCategory from '../src/Pages/ShopCategory'
import  Products from '../src/Pages/Products'
import Cart from '../src/Pages/Card'
import LoginSignup from '../src/Pages/LoginSignup'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
         <Navbar/>  
         <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory category='men'/>} />
          <Route path='/women' element={<ShopCategory category='women'/>} />
          <Route path='/kids' element={<ShopCategory category='kids'/>} />
          <Route path='/product'>
             <Route path=':productId' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
         </Routes>
         <Footer/>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
