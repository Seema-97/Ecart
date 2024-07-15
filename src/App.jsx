
import { Route, Routes } from 'react-router-dom'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      {/* <Form /> */}
      <Header />

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
        
    </>
  )
}

export default App
