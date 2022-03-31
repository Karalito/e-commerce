import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import ProductList from './screens/ProductListScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/e-commerce/' element={<HomeScreen />} exact />
        <Route path='/e-commerce/login' element={<LoginScreen />} />
        <Route path='/e-commerce/register' element={<RegisterScreen />} />
        <Route path='/e-commerce/cart' element={<CartScreen />} />
        <Route path='/e-commerce/login' element={<LoginScreen />} />
        <Route path='/e-commerce/products' element={<ProductList />} />
        <Route path='/e-commerce/product' element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
