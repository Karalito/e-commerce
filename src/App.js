import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/e-commerce/' element={<HomeScreen />} exact />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/product' element={<ProductScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
