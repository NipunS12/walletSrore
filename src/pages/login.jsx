import React from 'react'
import NavBar from '../components/navBar'
import Men from '../images/smart.png'
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";

function Login() {
  return (
    <div>

      <NavBar/>


      <section className='hero px-3 py-3 lg:py-10'>
        <div className='grid lg:grid-cols-2 items-center justify-items-center w-full h-96 '>


          <div className=" rounded-lg form w-10/11 h-10/11 bg-red-400 shadow-lg">

            <h1 className='text-5xl px-12 mt-8 text-center'>Welcome Back</h1>
            <h3 className='text-center mt-3'>Please enter your details</h3>

            <div className="loginItems grid grid-cols-3 items-center justify-items-center mt-5">
              <button className='text-3xl' ><FaGoogle /></button>
              <button className='text-3xl'><FaApple /></button>
              <button className='text-3xl'><FaFacebookF /></button>

            </div>

            <form className='p-12 -mt-5'>

              <div className='flex flex-col mt-2'>
                <label className='' htmlFor="">E mail</label>
              <input className='border mt-2 rounded-md bg-slate-100  px-16 py-1 w-96 ' type="email" />

              <label className='mt-3' htmlFor="">password</label>
              <input className='border rounded-md mt-2 px-16 py-1 w-96' type="text" />
              </div>

              <button className='py-2 px-5 rounded bg-black hover:bg-[#e11d48] transition-all duration-200 text-white mt-5 ml-36'>Login</button>

              
            </form>
          </div>

          <div className="image">
            <img src={Men} className='w-96 mr-16' alt="" />
          </div>

        </div>
      </section>




    </div>
  )
}

export default Login