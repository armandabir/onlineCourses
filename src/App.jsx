import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import Product from './pages/Product'
import Notfound from './pages/404'

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
