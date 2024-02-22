import React from 'react'
import NavBar from '../components/navBar'
import { useNavigate } from 'react-router-dom'

function Product() {

    const navigate = useNavigate()

    const cards = [
        {
            name : 'Tillie Mini Three-Hand ',
            price: 'Rs.27000.00',
            image : './images/classic2.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic2.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic2.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic.png'
        },

        {
            name : 'Casio',
            price: 'Rs.27000.00',
            image : './images/classic2.png'
        },
    ]
  return (
    <div>
        <NavBar/>

        <section px-3 py-5 >
            <div className='flex gap-3 items-center justify-end mr-24'>
                <label className=' text-lg font-medium leading-6 text-gray-900' htmlFor="">Search</label>
                <input className=' block w-96 rounded border-0 py-1.5 pl-7 pr-20text-gray-900 ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  ' type="text" />
            </div>
        </section>

        <section px-3 py-5 >
            <div className='p-8 mt-8 grid lg:grid-cols-4 items-center justify-items-center gap-y-14'>
                {cards.map((d,index) => {
                    return(
                        <div key={index} className=' rounded shadow-lg w-5/6 h-62 hover:bg-red-400 bg-slate-100 transition duration-300'>
                          <img src={d.image} className='w-64 ml-4 mt-8 ' alt="" /> 
                          <h2 className='px-5 font-semibold text-xl'>{d.name}</h2>
                          <h3 className='px-5'>{d.price}</h3>

                          <div className="button ml-16 ">
                                <button onClick={ () => navigate("/productItem")} className='mb-5 ml-6 py-2 px-5 rounded bg-black transition-all duration-200 text-white mt-5'>Shop Now</button>
                            </div> 
                        </div>
                        
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default Product 