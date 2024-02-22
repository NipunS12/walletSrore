import React from 'react'
import NavBar from '../components/navBar'
import Men from '../images/smart.png'

function ProductItem() {
  return (
    <div>
        <NavBar/>

        <section className='p-3 lg:py-10'>
            <div className='grid lg:grid-cols-2 justify-items-center'>
                <div className="image">
                <img className='w-96' src={Men} alt="" />
                </div>
                <div className="content mr-32 w-3/5">
                    <h1 className='text-3xl'>Colleen Three-Hand Stainless Steel Watch</h1>
                    <h2 className='text-xl mt-10'>$ 150.00</h2>
                    <p className='mt-3 text-xl'>or installment 50$, can pay debit or visa</p>
                    <p className='mt-3'>In stock</p>
                    <button className=' mt-3 py-2 px-3 rounded bg-black hover:bg-[#e11d48] transition-all duration-200 text-white mt-5'>Add to Cart</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductItem