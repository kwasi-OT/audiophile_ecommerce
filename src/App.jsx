import './App.scss'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Product from './components/Product'

function App() {
  
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/category/:name' element={<Category/>}/>
            <Route exact path='/product/:sku' element={<Product/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
