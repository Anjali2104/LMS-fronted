
import './App.css'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Signup from './pages/signup'
function App() {
  

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={ <Aboutus/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='*' element={<Notfound/>}/>
   </Routes>
  )
}

export default App
