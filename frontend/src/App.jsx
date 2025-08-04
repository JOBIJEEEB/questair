import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Career from './Pages/Career/Career'
import OurCompany from './Pages/Company/OurCompany'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import OurServices from './Pages/Services/OurServices'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/company' element={<OurCompany />} />
          <Route path ='/services' element = {<OurServices />}/>
          <Route path = '/career' element = {<Career />}/>
          <Route path = '/contact' element = {<Contact/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
