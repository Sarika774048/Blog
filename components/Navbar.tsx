import { Link } from 'react-router-dom';
import Me from '../public/Me4.jpg'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 shadow-md py-2 px-5 text-white'>
      <div className='flex flex-row mt-2 justify-between items-center'>
        
        {/* Logo + Heading */}
        <div className='flex items-center'>
          <section className='w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-200 shadow-md flex items-center justify-center'>
            <img 
              className='object-cover w-full h-full transition-transform duration-300 hover:scale-105' 
              src={Me} 
              alt="author" 
            />
          </section>
          <h1 className='pl-5 text-3xl font-bold text-cyan-200 drop-shadow-lg'>
            Sarika's Blog
          </h1>
        </div>
        
        {/* Navigation Links */}
        <ul className='flex justify-between gap-20 items-center'>
          <li>
            <Link 
              to="/" 
              className='inline-block text-xl font-bold text-white hover:text-red-400 transition duration-300 transform hover:scale-110'
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className='inline-block text-white font-bold text-xl hover:text-red-400 transition duration-300 transform hover:scale-110'
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/post" 
              className='inline-block text-white font-bold text-xl hover:text-red-400 transition duration-300 transform hover:scale-110'
            >
              Post
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className='inline-block text-white font-bold text-xl hover:text-red-400 transition duration-300 transform hover:scale-110'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
