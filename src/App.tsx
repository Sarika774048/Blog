import Home from '../pages/Home';
import About from '../pages/About'
import Post from '../pages/Post'
import Contact from '../pages/Contact'
import NotFoundPage from '../pages/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar'


const App : React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/about" element={< About/>} />
      <Route path="/post" element={< Post/>} />
      <Route path="/contact" element={< Contact/>} />
      <Route path="*" element={< NotFoundPage/>} />


    </Routes>
    
    </BrowserRouter>

   
    


    </>
  )
}

export default App