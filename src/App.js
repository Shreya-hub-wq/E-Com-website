import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import ProductCard from './Pages/ProductCard';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Fotter from './Components/Fotter/Fotter';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory bannner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCategory bannner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory bannner={kid_banner} category='kid'/>}/>

<Route path= "/product" element={<ProductCard/>}>
<Route path=':productId' element = {<ProductCard/>}/> 
</Route> 
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Fotter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
