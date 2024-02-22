import React from 'react'
import NavBar from '../components/navBar'
import Smart from '../images/smart.png'
import Classic from '../images/classic3.png'



function About() {
    return (
        <div>
            <NavBar />

            <section className="section1 px-3 py-5 lg:py-10">
                <div className='grid lg:grid-cols-2 items-center justify-items-center mt-5'>
                    <div className="content">
                        <h1 className='text-6xl px-14 ml-10'>Who are we</h1>
                        <p className='p-8 ml-10 text-lg'>Welcome to our watch store, where time meets style. Explore a curated collection of exquisite timepieces that blend precision with elegance. From classic designs to modern innovations, our store offers a diverse range of watches to suit every taste and occasion. Discover the perfect accessory to complement your lifestyle and make a statement. Timeless craftsmanship and cutting-edge technology converge in our selection, ensuring you find a watch that not only tells time but tells your story. Step into our watch haven and let every moment be a reflection of your distinct personality</p>
                    </div>
                    <div className="image">
                        <img className='w-96 mr-10' src={Smart} alt="" />
                    </div>
                </div>

            </section>

            <section className="section2">
                <p className='w-3/4 text-center justify-center p-8 ml-44 text-2xl tracking-wide leading-10 mt-5'>
                    A watch website offers a curated collection of wristwatches for sale. Visitors can explore diverse styles, brands, and features with detailed product information. The site may also provide educational content about watches and industry trends. Users can easily browse and purchase watches online.</p>
            </section>

            <section className="section3 px-3 py-5 lg:py-10">     
                    <div className="grid lg:grid-cols-2 items-center justify-items-center">
                        <div className="content">
                            <h1 className='text-4xl px-14 ml-10'>Our Classical Collection</h1>
                            <p className='p-8 ml-10 text-lg'>Discover timeless elegance with our Classical Watches collection. Each piece embodies precision craftsmanship and enduring style. Whether you're a seasoned collector or seeking sophistication, our curated selection reflects the artistry and heritage of classical watchmaking.</p>
                        </div>
                        <div className="image">
                            <img className='w-96 mr-10' src={Classic} alt="" />
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default About