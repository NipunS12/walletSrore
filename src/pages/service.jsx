import React from 'react'

function Service() {

  const data = [

    {
      name:'nipun',
      img: './images/classic.png'
    },

    {
      name:'nipun',
      img: './images/classic2.jpg'
    },

    {
      name:'nipun',
      img: './images/classic3.jpg'
    }
  ]

  return (
    <div>
      {
        data.map((d, index) => {
          return(
            <div key={index}>
              <h1>{d.name}</h1>
              <img src={d.img} alt="" />
            </div>
          )
        })
      }

      <div className='w-8 h-0 border-t-4 border-transparent border-solid border-green-500 '></div>
    </div>


  )
}

export default Service