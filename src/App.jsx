

import Form from './components/Form/Form'

import MyNavbar from './components/MyNavbar/MyNavbar'
// import Header from './components/MyNavbar/Header'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Ecart/Header/Header'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'
import axios from 'axios'


function App() {
  
  const [productsData , setProductsData] = useState([])
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      // console.log(response.data);
      setProductsData(response.data) ;
    })
    .catch((error)=>{
      console.log(error);
    })
  } , []
  )

  // console.log(productsData) ;

  
  return (
    <>
      {/* <Form /> */}

      {/* <Header /> */}
    
      {/* <MyNavbar /> */}

      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products data = {productsData}/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        
    </>
  )
}

export default App
