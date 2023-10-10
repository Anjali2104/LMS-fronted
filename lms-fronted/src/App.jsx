
import './App.css'
import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Signin from './pages/Signin'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Denied from './pages/Denied'
import CourseList from './pages/Course/CourseList'
import CourseDes from './pages/Course/CourseDes'
function App() {
  

  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={ <Aboutus/>} />
    <Route path='/contacts' element={<Contact/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/courses' element={<CourseList/>}/>
    <Route path='/course/description' element={<CourseDes/>}/>
    <Route path='/denied' element={<Denied/>}/>
    <Route path='*' element={<Notfound/>}/>
   </Routes>
  )
}

export default App
