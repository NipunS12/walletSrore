import React, {useState, useEffect} from 'react'
import { FaXmark, FaBars } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


function NavBar() {

  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    {name:"home", path: "/"},
    {name:"Service", path: "/service"},
    {name:"About", path: "/about"},
    {name:"Product", path: "/product"},
    {name:"Contact", path: "/contact"}
  ]
  return (
    <header className='w-full bg-white md:bg-transparent top-0 left-0 right-0'>
      <nav className={`py-8 lg:px-28 px-4 ${isSticky ? "sticky top-0 left-0 right-0 duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="" className=' text-2xl items-center font-semibold flex space-x-3' >D Mart</a>
          <ul className='md:flex space-x-12'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a className='block text-base' href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
         <div className='space-x-12 l:flex items-center '>
          <a href="/" className='lg-flex items-center '>Login</a> 
          <button onClick={() => navigate("/login")} className='py-2 px-4 rounded bg-black hover:bg-[#e11d48] transition-all duration-200 text-white'>Sign In</button>
         </div>

         <div className='md:hidden'>
          <button 
          onClick={toggleMenu}
          className='focus:outline-none'>
              {
            isMenuOpen ? (<FaXmark className='h-6 w-9 '/>) : (<FaBars className='h-6 w-9 '/>)
          }
          </button>
        
         </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar