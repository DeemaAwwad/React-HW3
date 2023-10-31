import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Resturant from './components/resturant/Resturant.jsx'
import Footer from './components/footer/Footer.jsx'


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<Products/>}/>
      <Route path='/resturant' element={<Resturant/>}/>
    </Routes>
    <Footer />
    </>
  )
}
export default App
