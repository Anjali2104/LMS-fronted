
import './App.css'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Signup from './pages/signup'
import Signin from './pages/Signin'
import Contact from './pages/Contact'
function App() {
  

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={ <Aboutus/>} />
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Signin/>}/>
    <Route path='*' element={<Notfound/>}/>
   </Routes>
  )
}

export default App
