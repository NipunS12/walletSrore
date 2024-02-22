import React from 'react'
import '../styles/index.css'
import NavBar from '../components/navBar'
import IdxPagination from '../components/indexItemsPagination'
import Image1 from '../images/i1.jpg'
import Ladies from '../images/ladies.png'
import Men from '../images/smart.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'


function Index() {

  const navigate = useNavigate()

  const data = [
    {
      img: './images/classic.png'
    },

    {
      img: './images/classic2.png'
    },

    {
      img: './images/classic3.png'
    },

    {
      img: './images/classic.png'
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div >
      <NavBar />

{/* 
      <section>

        <h1>fvbfdbfb</h1>
        <div>
        <Slider {...settings}>
          {
            data.map((d, index) => {
              return(
                <div key={index} className='flex w-14'>
                  <img className='w-14' src={d.img} alt="" />
                </div>
              )
            })
          }
          </Slider>
        </div>
      </section> */}

      

      {/* <section className='px-3 py-5 lg:py-10'>
        <div className='grid lg:grid-cols-2 items-center justify-items-center gap-28 '>
          <div className='content'>
            <h1 className='text-6xl font-medium'>Make Your Deal</h1>
            <button className='py-2 px-4 rounded bg-black hover:bg-[#e11d48] transition-all duration-200 text-white mt-5 '>Shop Now</button>
          </div>
          <div className=''>
             <div className=''>
              <img className='' src={Image1} alt="" /></div>
        </div>
          </div>
      </section> */}

      <section className="hero px-3 py-3 lg:py-10">
        <div className='grid lg:grid-cols-2 items-center justify-items-center w-full h-96 '>
          <div className="content">
            <h1 className='text-7xl mb-6'>Make Your deal</h1>
            <button className='py-2 px-3 rounded bg-black hover:bg-[#e11d48] transition-all duration-200 text-white mt-5 '>Shop Now</button>
          </div>
          <div className="image">
            <img className='w-96' src={Men} alt="" />
          </div>
        </div>
      </section>

      <section className='px-3 py-5 lg:py-10'>
        <div className='grid lg:grid-cols-3 items-center justify-center ml-16 p-16 gap-32 w-5/6'>

          <div className="item grid lg:grid-cols-2 items-center justify-items-center w-96 h-56 bg-red-400 shadow-lg rounded">
            <div className="content text-white text-xl font-semibold">MENS'S WATCHES</div>
            <div className="image w-48"><img src={Men} alt="" /></div>
          </div>

          <div className="item item grid lg:grid-cols-2 items-center justify-items-center rounded w-96 h-56 bg-red-400 shadow-lg">
            <div className="content text-white text-xl ml-6 font-semibold">WOMEN''S WATCHES</div>
            <div className="image w-48"><img src={Ladies} alt="" /></div>
          </div>

          <div className="item item grid lg:grid-cols-2 items-center justify-items-center rounded w-96 h-56 bg-red-400 shadow-lg">
            <div className="content text-white text-xl font-semibold">MENS'S WATCHES</div>
            <div className="image w-48"><img src={Ladies} alt="" /></div>
          </div>
        </div>
      </section>


      <IdxPagination />

      <section className='px-3 py-5 lg:y-10'>
        <div className="description grid lg:grid-cols-2 items-center justify-items-center">
          <div className="content px-14">
            <h1 className='text-4xl px-14 ml-10'>Why you choose us</h1>
            <p className='p-10 ml-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          </div>
          <div className="image">
            <img className='w-96 mr-14' src={Men} alt="" />
          </div>
        </div>
      </section>

    </div>


  )
}

export default Index