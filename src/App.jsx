import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Navbar from './components/navbar/Navbar'
import Admin from './pages/Admin/Admin.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App
