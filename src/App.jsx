import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductContextProvider } from './context/ProductsContext';
import Home from './pages/Home';
import ProdsCart from './pages/ProdsCart';


function App() {

  return (
    <BrowserRouter>
      <ProductContextProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<ProdsCart />}></Route>
            <Route path='/products' element={<h1>Products</h1>}></Route>
          </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  )
}

export default App