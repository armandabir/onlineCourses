import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/home'
import Product from './pages/Product'
import Notfound from './pages/404'
import { BergerMenuContextProvider } from './store/BergerMenuContext'

function App() {


  return (
    <BergerMenuContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='*' element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>
    </BergerMenuContextProvider>
  )
}

export default App
